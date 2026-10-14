-- Run as postgres in the existing project's SQL Editor after 001_admin_mfa.sql.
-- Uses existing account IDs internally; outputs check names and booleans only.
-- No project/account changes. Temporary objects and simulated claims roll back.
-- This tests PostgreSQL permissions, not Auth token issuance or PostgREST routing.
begin;
create temporary table portal_check_results(check_name text, passed boolean);
create temporary table portal_check_context as
select
 (select user_id from public.portal_members where role='admin' order by user_id limit 1) as admin_id,
 (select user_id from public.portal_members m where role='client'
  and not exists(select 1 from public.project_members p where p.user_id=m.user_id)
  order by user_id limit 1) as revoked_client_id,
 (select count(*) from public.client_projects) as project_count;
grant select on portal_check_context to authenticated;
grant insert, select on portal_check_results to authenticated;
insert into portal_check_results
select 'Existing administrator available', admin_id is not null from portal_check_context
union all select 'Unassigned client available',revoked_client_id is not null from portal_check_context
union all select 'Projects available for positive control', project_count>0 from portal_check_context;
insert into portal_check_results
select 'Eight MFA policies installed as restrictive', count(*)=8 and bool_and(permissive='RESTRICTIVE')
from pg_policies where schemaname='public' and (
 (tablename in ('client_projects','project_members','project_feedback','project_approvals') and policyname='Administrator MFA required')
 or (tablename='portal_members' and policyname in ('MFA membership read','MFA membership insert','MFA membership update','MFA membership delete')));
insert into portal_check_results
select 'RLS enabled on all five portal tables',count(*)=5 and bool_and(c.relrowsecurity)
from pg_class c join pg_namespace n on n.oid=c.relnamespace
where n.nspname='public' and c.relname in ('portal_members','client_projects','project_members','project_feedback','project_approvals');
insert into portal_check_results
select 'Authenticated role cannot bypass RLS',not rolbypassrls and not rolsuper from pg_roles where rolname='authenticated';
insert into portal_check_results
select 'Browser cannot change administrator roles',not has_column_privilege('authenticated','public.portal_members','role','UPDATE');
insert into portal_check_results
select 'Browser cannot truncate projects',not has_table_privilege('authenticated','public.client_projects','TRUNCATE');
insert into portal_check_results
select 'Anonymous cannot read portal tables',not bool_or(has_table_privilege('anon','public.'||t,'SELECT'))
from unnest(array['portal_members','client_projects','project_members','project_feedback','project_approvals']) as t;
do $$ declare a uuid; begin
 select admin_id into a from portal_check_context;
 if a is null then raise exception 'Administrator required for checks'; end if;
 perform set_config('request.jwt.claim.sub',a::text,true);
 perform set_config('request.jwt.claims',jsonb_build_object('sub',a,'role','authenticated','aal','aal1')::text,true);
end $$;
set local role authenticated;
insert into portal_check_results select 'Admin without MFA: own membership only',count(*)=1 and bool_and(user_id=auth.uid()) from public.portal_members;
insert into portal_check_results select 'Admin without MFA: project reads blocked',count(*)=0 from public.client_projects;
insert into portal_check_results select 'Admin without MFA: assignments blocked',count(*)=0 from public.project_members;
insert into portal_check_results select 'Admin without MFA: feedback blocked',count(*)=0 from public.project_feedback;
insert into portal_check_results select 'Admin without MFA: approvals blocked',count(*)=0 from public.project_approvals;
reset role;
do $$ declare a uuid; begin
 select admin_id into a from portal_check_context;
 perform set_config('request.jwt.claims',jsonb_build_object('sub',a,'role','authenticated','aal','aal2')::text,true);
end $$;
set local role authenticated;
insert into portal_check_results select 'Admin with MFA: all existing projects visible',count(*)=(select project_count from portal_check_context) from public.client_projects;
reset role;
do $$ declare c uuid; begin
 select revoked_client_id into c from portal_check_context;
 if c is null then raise exception 'Unassigned client required for checks'; end if;
 perform set_config('request.jwt.claim.sub',c::text,true);
 perform set_config('request.jwt.claims',jsonb_build_object('sub',c,'role','authenticated','aal','aal1')::text,true);
end $$;
set local role authenticated;
insert into portal_check_results select 'Unassigned client: own membership only',count(*)=1 and bool_and(role='client') from public.portal_members;
insert into portal_check_results select 'Unassigned client: no projects',count(*)=0 from public.client_projects;
insert into portal_check_results select 'Unassigned client: no feedback',count(*)=0 from public.project_feedback;
insert into portal_check_results select 'Unassigned client: no approvals',count(*)=0 from public.project_approvals;
reset role;
select check_name,case when passed then 'PASS' else 'FAIL' end as result
from portal_check_results order by passed,check_name;
rollback;
