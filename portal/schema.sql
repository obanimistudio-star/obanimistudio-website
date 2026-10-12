-- ObanimiStudio Client Portal - REVIEW BEFORE RUNNING
-- Run only in the intended Supabase project after owner approval.
-- No public signup workflow is used. Invite users from the Supabase dashboard.
create extension if not exists pgcrypto;

create table if not exists public.portal_members (
 user_id uuid primary key references auth.users(id) on delete cascade,
 role text not null default 'client' check (role in ('admin','client')),
 display_name text not null default '',
 created_at timestamptz not null default now()
);
create table if not exists public.client_projects (
 id uuid primary key default gen_random_uuid(),
 client_id uuid not null references public.portal_members(user_id),
 title text not null check (length(title) between 1 and 160),
 summary text not null default '',
 status text not null default 'planning' check (status in ('planning','in_progress','review','completed','on_hold')),
 progress smallint not null default 0 check (progress between 0 and 100),
 preview_url text,
 updated_at timestamptz not null default now(),
 created_at timestamptz not null default now(),
 constraint preview_url_https check (preview_url is null or preview_url ~ '^https://[^[:space:]]+$')
);
create table if not exists public.project_feedback (
 id uuid primary key default gen_random_uuid(),
 project_id uuid not null references public.client_projects(id) on delete cascade,
 author_id uuid not null references auth.users(id),
 message text not null check (length(trim(message)) between 1 and 3000),
 created_at timestamptz not null default now()
);
create table if not exists public.project_approvals (
 id uuid primary key default gen_random_uuid(),
 project_id uuid not null references public.client_projects(id) on delete cascade,
 client_id uuid not null references auth.users(id),
 decision text not null check (decision in ('approved','changes_requested')),
 note text not null default '' check (length(note) <= 3000),
 created_at timestamptz not null default now()
);
create index if not exists client_projects_client_idx on public.client_projects(client_id);
create index if not exists project_feedback_project_idx on public.project_feedback(project_id,created_at desc);
create index if not exists project_approvals_project_idx on public.project_approvals(project_id,created_at desc);

-- SECURITY DEFINER avoids RLS recursion while checking administrator membership.
create or replace function public.portal_is_admin()
returns boolean language sql stable security definer set search_path = ''
as $$ select exists (select 1 from public.portal_members where user_id = (select auth.uid()) and role = 'admin'); $$;
revoke all on function public.portal_is_admin() from public;
grant execute on function public.portal_is_admin() to authenticated;

alter table public.portal_members enable row level security;
alter table public.client_projects enable row level security;
alter table public.project_feedback enable row level security;
alter table public.project_approvals enable row level security;

revoke all on public.portal_members,public.client_projects,public.project_feedback,public.project_approvals from anon;
grant select on public.portal_members,public.client_projects,public.project_feedback,public.project_approvals to authenticated;
grant insert on public.project_feedback,public.project_approvals to authenticated;
grant insert,update,delete on public.portal_members,public.client_projects to authenticated;

create policy "Members view own profile or admin" on public.portal_members
for select to authenticated using (user_id = (select auth.uid()) or (select public.portal_is_admin()));
create policy "Only admins create members" on public.portal_members
for insert to authenticated with check ((select public.portal_is_admin()));
create policy "Only admins update members" on public.portal_members
for update to authenticated using ((select public.portal_is_admin())) with check ((select public.portal_is_admin()));
create policy "Only admins remove members" on public.portal_members
for delete to authenticated using ((select public.portal_is_admin()));

create policy "Clients view their projects" on public.client_projects
for select to authenticated using (client_id = (select auth.uid()) or (select public.portal_is_admin()));
create policy "Admins create projects" on public.client_projects
for insert to authenticated with check ((select public.portal_is_admin()));
create policy "Admins update projects" on public.client_projects
for update to authenticated using ((select public.portal_is_admin())) with check ((select public.portal_is_admin()));
create policy "Admins remove projects" on public.client_projects
for delete to authenticated using ((select public.portal_is_admin()));

create policy "Project participants view feedback" on public.project_feedback
for select to authenticated using (exists (
 select 1 from public.client_projects p where p.id = project_id
 and (p.client_id = (select auth.uid()) or (select public.portal_is_admin()))
));
create policy "Project participants add own feedback" on public.project_feedback
for insert to authenticated with check (author_id = (select auth.uid()) and exists (
 select 1 from public.client_projects p where p.id = project_id
 and (p.client_id = (select auth.uid()) or (select public.portal_is_admin()))
));

create policy "Project participants view approvals" on public.project_approvals
for select to authenticated using (exists (
 select 1 from public.client_projects p where p.id = project_id
 and (p.client_id = (select auth.uid()) or (select public.portal_is_admin()))
));
create policy "Client can submit own decision" on public.project_approvals
for insert to authenticated with check (client_id = (select auth.uid()) and exists (
 select 1 from public.client_projects p where p.id = project_id and p.client_id = (select auth.uid())
 and p.status = 'review'
));

-- MANUAL ADMIN BOOTSTRAP (after inviting/signing in as the owner):
-- Insert your auth.users UUID in the Supabase SQL editor. Never put it in public JS.
-- insert into public.portal_members(user_id,role,display_name)
-- values ('YOUR_AUTH_USER_UUID','admin','ObanimiStudio Admin');
-- NOTE: privileged SQL editor actions bypass RLS. Only the account owner should run them.
