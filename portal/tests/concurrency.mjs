// Real competing PostgreSQL sessions, exclusively against a disposable LOCAL database.
// Dependency: pg. Start a local PostgreSQL instance, then node portal/tests/concurrency.mjs.
import pg from 'pg';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

// Deliberately do not accept a connection URL or remote host/credentials.
const config = { host: '127.0.0.1', port: Number(process.env.PORTAL_TEST_PGPORT || 5432), user: 'postgres', database: 'postgres', connectionTimeoutMillis: 5000 };
const owner = new pg.Client(config);
const name = 'portal_test_' + randomUUID().replaceAll('-', '');
const admin = '00000000-0000-0000-0000-000000000001';
const alice = '00000000-0000-0000-0000-000000000002';
const bob = '00000000-0000-0000-0000-000000000003';
const project = '10000000-0000-0000-0000-000000000001';
const sessions = [];
let created = false, checks = 0;
await owner.connect();
try {
  await owner.query(`create database ${name}`); created = true;
  async function connection() {
    const c = new pg.Client({ ...config, database: name });
    await c.connect(); sessions.push(c);
    await c.query("set statement_timeout='8s'");
    return c;
  }
  const db = await connection(), first = await connection(), second = await connection();
  // Roles are cluster-wide; reuse them only in this local test instance.
  await db.query(`do $$ begin
    if not exists(select from pg_roles where rolname='anon') then create role anon; end if;
    if not exists(select from pg_roles where rolname='authenticated') then create role authenticated; end if;
  end $$;
  create schema auth; create table auth.users(id uuid primary key);
  create function auth.uid() returns uuid language sql stable as $$
    select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
  create function auth.jwt() returns jsonb language sql stable as $$
    select coalesce(nullif(current_setting('request.jwt.claims',true),'')::jsonb,'{}'::jsonb) $$;
  grant usage on schema auth to authenticated;
  grant execute on function auth.uid(),auth.jwt() to authenticated;
  alter default privileges in schema public grant all on tables to anon,authenticated;
  insert into auth.users values('${admin}'),('${alice}'),('${bob}');`);
  await db.query(await readFile(new URL('../schema.sql', import.meta.url), 'utf8'));
  await db.query(`insert into public.portal_members values
    ('${admin}','admin','Admin'),('${alice}','client','Alice'),('${bob}','client','Bob');
    insert into public.client_projects(id,title,status) values('${project}','Concurrent test','review');
    insert into public.project_members values('${project}','${alice}'),('${project}','${bob}');`);

  async function identity(c, id) {
    await c.query('reset role');
    await c.query("select set_config('request.jwt.claim.sub',$1,false),set_config('request.jwt.claims',$2,false)", [id, JSON.stringify({ sub:id, aal:id === admin ? 'aal2' : 'aal1' })]);
    await c.query('set role authenticated');
  }
  const revision = async () => (await db.query('select revision from public.client_projects where id=$1',[project])).rows[0].revision;
  const edit = (c, rev, title) => c.query('update public.client_projects set title=$1 where id=$2 and revision=$3 returning revision',[title,project,rev]);
  const approve = (c, id, rev) => c.query("insert into public.project_approvals(project_id,author_id,revision,decision) values($1,$2,$3,'approved') returning revision",[project,id,rev]);
  // Capture rejection immediately, before deliberately holding a competing transaction.
  const outcome = promise => promise.then(result => ({result}), error => ({error}));
  async function blocked(c) {
    const until = Date.now()+5000;
    while (Date.now()<until) {
      const result = await db.query('select wait_event_type from pg_stat_activity where pid=$1',[c.processID]);
      if (result.rows[0]?.wait_event_type === 'Lock') return;
      await new Promise(resolve=>setTimeout(resolve,20));
    }
    assert.fail('Competing session did not reach the expected database lock');
  }
  async function race(id1, id2, operation1, operation2, verify) {
    await identity(first,id1); await identity(second,id2);
    await first.query('begin');
    try {
      const winner = await operation1(first);
      const pending = outcome(operation2(second));
      await blocked(second); // proves real overlap, rather than sequential calls
      await first.query('commit');
      await verify(winner,await pending);
      checks++;
    } finally { await first.query('rollback'); }
  }
  let rev = await revision();
  await race(admin,admin,c=>edit(c,rev,'First save'),c=>edit(c,rev,'Stale save'),async (a,b)=>{
    assert.equal(a.rowCount,1); assert.ifError(b.error); assert.equal(b.result.rowCount,0);
    const row=(await db.query('select title,revision from public.client_projects where id=$1',[project])).rows[0];
    assert.equal(row.title,'First save'); assert.equal(row.revision,rev+1);
  });
  rev = await revision();
  await race(admin,alice,c=>edit(c,rev,'New version'),c=>approve(c,alice,rev),async (a,b)=>{
    assert.equal(a.rowCount,1); assert.equal(b.error?.code,'23514');
    assert.equal((await db.query('select * from public.project_approvals')).rowCount,0);
  });
  rev = await revision();
  await race(alice,admin,c=>approve(c,alice,rev),c=>edit(c,rev,'After approval'),async (a,b)=>{
    assert.equal(a.rowCount,1); assert.ifError(b.error); assert.equal(b.result.rowCount,1);
    assert.equal(await revision(),rev+1);
    assert.equal((await db.query('select revision from public.project_approvals where author_id=$1',[alice])).rows[0].revision,rev);
  });
  rev = await revision();
  await race(alice,alice,c=>approve(c,alice,rev),c=>approve(c,alice,rev),async (a,b)=>{
    assert.equal(a.rowCount,1); assert.equal(b.error?.code,'23505');
    assert.equal((await db.query('select * from public.project_approvals where revision=$1',[rev])).rowCount,1);
  });
  // A second legitimate reviewer is not incorrectly rejected as a duplicate.
  await db.query('update public.client_projects set summary=$1 where id=$2',['Next review',project]);
  rev = await revision();
  await race(alice,bob,c=>approve(c,alice,rev),c=>approve(c,bob,rev),async (a,b)=>{
    assert.equal(a.rowCount,1); assert.ifError(b.error); assert.equal(b.result.rowCount,1);
    assert.equal((await db.query('select * from public.project_approvals where revision=$1',[rev])).rowCount,2);
  });
  console.log(`${checks} real concurrent transaction scenarios passed: competing saves, edit before approval, approval before edit, duplicate decision, independent reviewers. No Supabase connection used.`);
} finally {
  await Promise.allSettled(sessions.map(c=>c.end()));
  if (created) await owner.query(`drop database ${name} with (force)`);
  await owner.end();
}
