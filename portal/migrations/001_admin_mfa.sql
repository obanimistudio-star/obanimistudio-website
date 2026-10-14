-- Upgrade for the existing portal schema. Deploy the MFA UI before applying.
-- Owner must retain Supabase dashboard access for recovery; this is separate MFA.
begin;
create or replace function private.portal_mfa_allowed() returns boolean
language sql stable security definer set search_path=''
as $$ select coalesce((select auth.jwt()->>'aal')='aal2',false)
  or not exists(select 1 from public.portal_members where user_id=(select auth.uid()) and role='admin') $$;
revoke all on function private.portal_mfa_allowed() from public,anon;
grant execute on function private.portal_mfa_allowed() to authenticated;
-- Restrictive policies also stop an administrator who has a client assignment
-- from using the client paths before MFA. Existing authorisation still applies.
do $$ declare t text; begin
 foreach t in array array['client_projects','project_members','project_feedback','project_approvals'] loop
  execute format('drop policy if exists "Administrator MFA required" on public.%I',t);
  execute format('create policy "Administrator MFA required" on public.%I as restrictive for all to authenticated using ((select private.portal_mfa_allowed())) with check ((select private.portal_mfa_allowed()))',t);
 end loop;
end $$;
-- Allow reading only one's own membership before MFA so the UI can enroll.
drop policy if exists "MFA membership read" on public.portal_members;
create policy "MFA membership read" on public.portal_members as restrictive for select to authenticated
using(user_id=(select auth.uid()) or (select private.portal_mfa_allowed()));
drop policy if exists "MFA membership insert" on public.portal_members;
create policy "MFA membership insert" on public.portal_members as restrictive for insert to authenticated with check((select private.portal_mfa_allowed()));
drop policy if exists "MFA membership update" on public.portal_members;
create policy "MFA membership update" on public.portal_members as restrictive for update to authenticated using((select private.portal_mfa_allowed())) with check((select private.portal_mfa_allowed()));
drop policy if exists "MFA membership delete" on public.portal_members;
create policy "MFA membership delete" on public.portal_members as restrictive for delete to authenticated using((select private.portal_mfa_allowed()));
commit;
