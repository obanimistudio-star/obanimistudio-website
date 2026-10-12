-- DRAFT ONLY. DO NOT RUN without explicit owner approval.
-- Intended for a NEW installation in the EXISTING ObanimiStudio Supabase project.
-- Review existing objects and policies first. Never run PR39/PR40 SQL alongside this.
create extension if not exists pgcrypto;
create table public.portal_members(
 user_id uuid primary key references auth.users(id) on delete cascade,
 role text not null check(role in ('admin','client')),
 display_name text not null default ''
);
create table public.client_projects(
 id uuid primary key default gen_random_uuid(),
 title text not null check(length(trim(title)) between 1 and 160),
 summary text not null default '',
 status text not null default 'planning' check(status in ('planning','in_progress','review','completed','on_hold')),
 progress smallint not null default 0 check(progress between 0 and 100),
 preview_url text check(preview_url is null or preview_url ~ '^https://[^[:space:]]+$'),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create table public.project_members(
 project_id uuid not null references public.client_projects(id) on delete cascade,
 user_id uuid not null references public.portal_members(user_id) on delete cascade,
 primary key(project_id,user_id)
);
create table public.project_feedback(
 id uuid primary key default gen_random_uuid(),
 project_id uuid not null references public.client_projects(id) on delete cascade,
 author_id uuid not null references auth.users(id),
 message text not null check(length(trim(message)) between 1 and 3000),
 created_at timestamptz not null default now()
);
create table public.project_approvals(
 id uuid primary key default gen_random_uuid(),
 project_id uuid not null references public.client_projects(id) on delete cascade,
 author_id uuid not null references auth.users(id),
 decision text not null check(decision in ('approved','changes_requested')),
 note text not null default '' check(length(note)<=3000 and (decision<>'changes_requested' or length(trim(note))>0)),
 created_at timestamptz not null default now()
);
create index on public.project_members(user_id);
create index on public.project_feedback(project_id,created_at desc);
create index on public.project_approvals(project_id,created_at desc);
create schema if not exists private;
create function private.portal_admin() returns boolean language sql stable security definer set search_path=''
as $$ select exists(select 1 from public.portal_members where user_id=(select auth.uid()) and role='admin') $$;
create function private.portal_project_member(p uuid) returns boolean language sql stable security definer set search_path=''
as $$ select exists(select 1 from public.project_members where project_id=p and user_id=(select auth.uid())) $$;
revoke all on function private.portal_admin() from public;
revoke all on function private.portal_project_member(uuid) from public;
grant usage on schema private to authenticated;
grant execute on function private.portal_admin() to authenticated;
grant execute on function private.portal_project_member(uuid) to authenticated;
alter table public.portal_members enable row level security;
alter table public.client_projects enable row level security;
alter table public.project_members enable row level security;
alter table public.project_feedback enable row level security;
alter table public.project_approvals enable row level security;
revoke all on public.portal_members,public.client_projects,public.project_members,public.project_feedback,public.project_approvals from anon;
grant select on public.portal_members,public.client_projects,public.project_members,public.project_feedback,public.project_approvals to authenticated;
grant insert,update,delete on public.portal_members,public.client_projects,public.project_members to authenticated;
grant insert on public.project_feedback,public.project_approvals to authenticated;
create policy "Read own member or admin" on public.portal_members for select to authenticated using(user_id=(select auth.uid()) or (select private.portal_admin()));
create policy "Admin inserts members" on public.portal_members for insert to authenticated with check((select private.portal_admin()));
create policy "Admin updates members" on public.portal_members for update to authenticated using((select private.portal_admin())) with check((select private.portal_admin()));
create policy "Admin deletes members" on public.portal_members for delete to authenticated using((select private.portal_admin()));
create policy "Read assigned projects" on public.client_projects for select to authenticated using((select private.portal_admin()) or private.portal_project_member(id));
create policy "Admin inserts projects" on public.client_projects for insert to authenticated with check((select private.portal_admin()));
create policy "Admin updates projects" on public.client_projects for update to authenticated using((select private.portal_admin())) with check((select private.portal_admin()));
create policy "Admin deletes projects" on public.client_projects for delete to authenticated using((select private.portal_admin()));
create policy "Read own assignment" on public.project_members for select to authenticated using(user_id=(select auth.uid()) or (select private.portal_admin()));
create policy "Admin inserts assignments" on public.project_members for insert to authenticated with check((select private.portal_admin()));
create policy "Admin updates assignments" on public.project_members for update to authenticated using((select private.portal_admin())) with check((select private.portal_admin()));
create policy "Admin deletes assignments" on public.project_members for delete to authenticated using((select private.portal_admin()));
create policy "Read assigned feedback" on public.project_feedback for select to authenticated using((select private.portal_admin()) or private.portal_project_member(project_id));
create policy "Members add feedback" on public.project_feedback for insert to authenticated with check(author_id=(select auth.uid()) and ((select private.portal_admin()) or private.portal_project_member(project_id)));
create policy "Read assigned approvals" on public.project_approvals for select to authenticated using((select private.portal_admin()) or private.portal_project_member(project_id));
create policy "Clients approve review stage" on public.project_approvals for insert to authenticated with check(author_id=(select auth.uid()) and private.portal_project_member(project_id) and exists(select 1 from public.client_projects p where p.id=project_id and p.status='review') and exists(select 1 from public.portal_members m where m.user_id=(select auth.uid()) and m.role='client'));
-- Initial admin bootstrap is a separate, owner-approved operation after Auth UUID verification.
-- Public signup must be disabled in Supabase Auth settings.
