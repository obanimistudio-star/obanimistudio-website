// Disposable storage/RLS model. Never connects to hosted Storage or Supabase.
import { PGlite } from '@electric-sql/pglite';
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const db=new PGlite();let checks=0;
const admin='00000000-0000-0000-0000-000000000001',alice='00000000-0000-0000-0000-000000000002',bob='00000000-0000-0000-0000-000000000003';
const project='10000000-0000-0000-0000-000000000001',other='10000000-0000-0000-0000-000000000002';
const bucket='obanimistudio-portal-reviews';
const file=revision=>`${project}/${revision}/20000000-0000-0000-0000-000000000001.pdf`;
await db.exec(`create role anon;create role authenticated;create schema auth;create table auth.users(id uuid primary key);
 create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
 create function auth.jwt() returns jsonb language sql stable as $$ select jsonb_build_object('aal',nullif(current_setting('request.jwt.claim.aal',true),'')) $$;
 grant usage on schema auth to anon,authenticated;grant execute on function auth.uid(),auth.jwt() to anon,authenticated;
 insert into auth.users values('${admin}'),('${alice}'),('${bob}');`);
await db.exec(await readFile(new URL('../schema.sql',import.meta.url),'utf8'));
await db.exec(`insert into public.portal_members values('${admin}','admin','Admin'),('${alice}','client','Alice'),('${bob}','client','Bob');
 insert into public.client_projects(id,title,status) values('${project}','Review','review'),('${other}','Other','review');
 insert into public.project_members values('${project}','${alice}'),('${other}','${bob}');
 create schema storage;
 create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
 create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text,unique(bucket_id,name));
 alter table storage.objects enable row level security;
 grant usage on schema storage to anon,authenticated;
 grant select,insert,update,delete on storage.objects to anon,authenticated;
 -- Deliberately unsafe legacy policies: the new bucket must still fail closed.
 create policy legacy on storage.objects for all to public using(true) with check(true);
 insert into storage.buckets values('unrelated','unrelated',true,null,null);
 insert into storage.objects(bucket_id,name) values('unrelated','public-file');`);
const migration=await readFile(new URL('../migrations/002_private_reviews.sql',import.meta.url),'utf8');
await db.exec(migration);await db.exec(migration);
const settings=(await db.query(`select * from storage.buckets where id='${bucket}'`)).rows[0];
assert.equal(settings.public,false);assert.equal(Number(settings.file_size_limit),10485760);checks++;
assert.equal((await db.query("select public from storage.buckets where id='unrelated'")).rows[0].public,true);checks++;
async function as(id,aal=id===admin?'aal2':'aal1'){
 await db.exec(`reset role;select set_config('request.jwt.claim.sub','${id||''}',false),set_config('request.jwt.claim.aal','${aal}',false);set role ${id?'authenticated':'anon'};`);
}
async function denied(sql){let error;try{await db.exec(sql);}catch(e){error=e;}assert.ok(error,'Expected denial');checks++;}
async function count(sql,n){assert.equal((await db.query(sql)).rows.length,n);checks++;}
const insert=name=>`insert into storage.objects(bucket_id,name) values('${bucket}','${name}')`;
await as(admin);
await db.exec(insert(file(1)));checks++;
await count(`select * from storage.objects where bucket_id='${bucket}'`,1);
await denied(insert(file(2))); // cannot pre-publish a future revision
await denied(insert('../unsafe.html'));
await denied(insert(`${project}/1/------------------------------------.pdf`));
await count(`update storage.objects set name='moved' where bucket_id='${bucket}' returning id`,0);
await count(`delete from storage.objects where bucket_id='${bucket}' returning id`,0);
await as(admin,'aal1');
await count(`select * from storage.objects where bucket_id='${bucket}'`,0);
await denied(insert(`${project}/1/20000000-0000-0000-0000-000000000002.png`));
await as(null);await count(`select * from storage.objects where bucket_id='${bucket}'`,0);await denied(insert(file(1)));
await as(alice);await count(`select * from storage.objects where bucket_id='${bucket}'`,1);await denied(insert(file(1)));
await count(`update storage.objects set bucket_id='unrelated' where bucket_id='${bucket}' returning id`,0);
await as(bob);await count(`select * from storage.objects where bucket_id='${bucket}'`,0);
await db.exec('reset role');await db.exec(`update public.client_projects set progress=10 where id='${project}'`);
await as(admin);await db.exec(insert(file(2)));checks++;
await as(alice);await count(`select * from storage.objects where bucket_id='${bucket}'`,2);
await db.exec(`insert into public.project_approvals(project_id,author_id,revision,decision) values('${project}','${alice}',2,'approved')`);checks++;
await as(admin);await denied(insert(`${project}/2/20000000-0000-0000-0000-000000000004.pdf`));
await as(admin);await denied(insert(`${project}/1/20000000-0000-0000-0000-000000000003.pdf`)); // past review immutable
await db.exec(`delete from public.project_members where project_id='${project}' and user_id='${alice}'`);
await as(alice);await count(`select * from storage.objects where bucket_id='${bucket}'`,0);
await count("select * from storage.objects where bucket_id='unrelated'",1);
await db.close();console.log(`${checks} private review storage policy checks passed in a disposable model. No hosted Storage connection used.`);
