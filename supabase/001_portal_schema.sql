-- ObanimiStudio private client portal foundation.
-- REVIEW BEFORE APPLYING. Run in the intended Supabase project SQL Editor.
-- Never expose service_role or database credentials to browser clients.
create extension if not exists pgcrypto;
create schema if not exists private;

create table if not exists public.portal_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.client_projects (
  id uuid primary key default gen_random_uuid(),
  title text not null check (length(trim(title)) between 1 and 160),
  description text not null default '',
  status text not null default 'planning' check (status in ('planning','in_progress','review','completed','on_hold')),
  progress smallint not null default 0 check (progress between 0 and 100),
  review_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.project_members (
  project_id uuid not null references public.client_projects(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (project_id,user_id)
);
create table if not exists public.project_feedback (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.client_projects(id) on delete cascade,
  author_id uuid not null default auth.uid() references auth.users(id),
  message text not null check (length(trim(message)) between 1 and 3000),
  created_at timestamptz not null default now()
);
create table if not exists public.project_approvals (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.client_projects(id) on delete cascade,
  author_id uuid not null default auth.uid() references auth.users(id),
  decision text not null check (decision in ('approved','changes_requested')),
  note text not null default '' check (length(note) <= 3000),
  created_at timestamptz not null default now()
);
create index if not exists project_members_user_idx on public.project_members(user_id);
create index if not exists feedback_project_idx on public.project_feedback(project_id,created_at desc);
create index if not exists approvals_project_idx on public.project_approvals(project_id,created_at desc);

-- SECURITY DEFINER functions avoid recursive RLS policy lookups.
create or replace function private.is_portal_admin()
returns boolean language sql stable security definer set search_path = ''
as $$ select exists (select 1 from public.portal_admins where user_id = (select auth.uid())); $$;
create or replace function private.is_project_member(p_id uuid)
returns boolean language sql stable security definer set search_path = ''
as $$ select exists (select 1 from public.project_members where project_id = p_id and user_id = (select auth.uid())); $$;
revoke all on function private.is_portal_admin() from public;
revoke all on function private.is_project_member(uuid) from public;
grant usage on schema private to authenticated;
grant execute on function private.is_portal_admin() to authenticated;
grant execute on function private.is_project_member(uuid) to authenticated;

alter table public.portal_admins enable row level security;
alter table public.client_projects enable row level security;
alter table public.project_members enable row level security;
alter table public.project_feedback enable row level security;
alter table public.project_approvals enable row level security;

create policy "Admins can see admins" on public.portal_admins for select to authenticated using (private.is_portal_admin());
create policy "Admins manage admins" on public.portal_admins for all to authenticated using (private.is_portal_admin()) with check (private.is_portal_admin());

create policy "Members see assigned projects" on public.client_projects for select to authenticated using (private.is_portal_admin() or private.is_project_member(id));
create policy "Admins create projects" on public.client_projects for insert to authenticated with check (private.is_portal_admin());
create policy "Admins update projects" on public.client_projects for update to authenticated using (private.is_portal_admin()) with check (private.is_portal_admin());
create policy "Admins delete projects" on public.client_projects for delete to authenticated using (private.is_portal_admin());

create policy "Members see their assignments" on public.project_members for select to authenticated using (private.is_portal_admin() or user_id = (select auth.uid()));
create policy "Admins create assignments" on public.project_members for insert to authenticated with check (private.is_portal_admin());
create policy "Admins update assignments" on public.project_members for update to authenticated using (private.is_portal_admin()) with check (private.is_portal_admin());
create policy "Admins delete assignments" on public.project_members for delete to authenticated using (private.is_portal_admin());

create policy "Members read feedback" on public.project_feedback for select to authenticated using (private.is_portal_admin() or private.is_project_member(project_id));
create policy "Members send own feedback" on public.project_feedback for insert to authenticated with check (author_id = (select auth.uid()) and (private.is_portal_admin() or private.is_project_member(project_id)));
create policy "Admins delete feedback" on public.project_feedback for delete to authenticated using (private.is_portal_admin());

create policy "Members read approvals" on public.project_approvals for select to authenticated using (private.is_portal_admin() or private.is_project_member(project_id));
create policy "Members record own decisions" on public.project_approvals for insert to authenticated with check (author_id = (select auth.uid()) and (private.is_portal_admin() or private.is_project_member(project_id)));

-- Explicitly grant only the required table operations to signed-in users.
revoke all on public.portal_admins, public.client_projects, public.project_members, public.project_feedback, public.project_approvals from anon;
grant select,insert,update,delete on public.portal_admins,public.client_projects,public.project_members to authenticated;
grant select,insert,delete on public.project_feedback to authenticated;
grant select,insert on public.project_approvals to authenticated;

-- IMPORTANT: First admin must be provisioned manually in SQL Editor by the project owner,
-- after verifying the exact auth.users.id. Do not use an unverified email or arbitrary UUID.
-- insert into public.portal_admins(user_id) values ('VERIFIED-AUTH-USER-UUID');
-- Keep Supabase public sign-ups disabled; invite clients via Auth dashboard only.
