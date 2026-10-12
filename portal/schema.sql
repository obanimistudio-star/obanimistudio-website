-- DRAFT ONLY. DO NOT RUN without explicit owner approval.
-- Intended for a NEW installation in the EXISTING ObanimiStudio Supabase project.
-- Review existing objects and policies first. Never run PR39/PR40 SQL alongside this.
begin;
-- Atomic new installation: any conflict rolls back all changes.

create table public.portal_members(
 user_id uuid primary key references auth.users(id) on delete cascade,
 role text not null check(role in ('admin','client')),
 display_name text not null default '' check(length(display_name)<=160)
);
create table public.client_projects(
 id uuid primary key default gen_random_uuid(),
 title text not null check(length(trim(title)) between 1 and 160),
 summary text not null default '' check(length(summary)<=5000),
 revision integer not null default 1 check(revision>0),
 status text not null default 'planning' check(status in ('planning','in_progress','review','completed','on_hold')),
 progress smallint not null default 0 check(progress between 0 and 100),
 preview_url text check(preview_url is null or preview_url ~ '^https://[^[:space:]@]+$' and length(preview_url)<=2048),
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
 revision integer not null check(revision>0),
 decision text not null check(decision in ('approved','changes_requested')),
 note text not null default '' check(length(note)<=3000 and (decision<>'changes_requested' or length(trim(note))>0)),
 created_at timestamptz not null default now(),
 unique(project_id,revision,author_id)
);
create index on public.project_members(user_id);
create index on public.project_feedback(project_id,created_at desc);
create index on public.project_approvals(project_id,created_at desc);
create schema if not exists private;
-- Do not change privileges of unrelated objects in an existing private schema.
create table private.portal_audit(
 id bigint generated always as identity primary key,
 actor_id uuid, table_name text not null, operation text not null,
 row_id text not null, occurred_at timestamptz not null default now()
);
revoke all on private.portal_audit from public,anon,authenticated;
create function private.portal_audit_change() returns trigger language plpgsql security definer set search_path='' as $$
begin
 insert into private.portal_audit(actor_id,table_name,operation,row_id)
 values(auth.uid(),TG_TABLE_NAME,TG_OP,coalesce(to_jsonb(NEW),to_jsonb(OLD))->>case when TG_TABLE_NAME='portal_members' then 'user_id' when TG_TABLE_NAME='project_members' then 'project_id' else 'id' end || case when TG_TABLE_NAME='project_members' then ':'||(coalesce(to_jsonb(NEW),to_jsonb(OLD))->>'user_id') else '' end);
 return coalesce(NEW,OLD);
end $$;
create function private.portal_project_version() returns trigger language plpgsql set search_path='' as $$
begin
 NEW.created_at:=OLD.created_at;
 NEW.updated_at:=clock_timestamp();
 NEW.revision:=OLD.revision+1;
 return NEW;
end $$;
create trigger project_version before update on public.client_projects for each row execute function private.portal_project_version();
-- Serialize decisions against project edits and reject approvals of an old version.
create function private.portal_check_approval() returns trigger language plpgsql security definer set search_path='' as $$
declare current_revision integer; current_status text;
begin
 select revision,status into current_revision,current_status from public.client_projects where id=NEW.project_id for update;
 if current_status is distinct from 'review' or current_revision is distinct from NEW.revision then
 raise exception 'Project review version has changed' using errcode='23514';
 end if;
 NEW.created_at:=clock_timestamp();
 return NEW;
end $$;
create trigger approval_version before insert on public.project_approvals for each row execute function private.portal_check_approval();
create trigger audit_projects after insert or update or delete on public.client_projects for each row execute function private.portal_audit_change();
create trigger audit_members after insert or update or delete on public.portal_members for each row execute function private.portal_audit_change();
create trigger audit_assignments after insert or update or delete on public.project_members for each row execute function private.portal_audit_change();
create trigger audit_feedback after insert on public.project_feedback for each row execute function private.portal_audit_change();
create trigger audit_approvals after insert on public.project_approvals for each row execute function private.portal_audit_change();
revoke all on function private.portal_audit_change(),private.portal_project_version(),private.portal_check_approval() from public,anon,authenticated;
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
revoke all on public.portal_members,public.client_projects,public.project_members,public.project_feedback,public.project_approvals from public,anon,authenticated;
grant select on public.portal_members,public.client_projects,public.project_members,public.project_feedback,public.project_approvals to authenticated;
grant insert,delete on public.portal_members to authenticated;
grant update(display_name) on public.portal_members to authenticated;
grant insert,delete on public.client_projects,public.project_members to authenticated;
grant update(title,summary,status,progress,preview_url) on public.client_projects to authenticated;
grant insert(project_id,author_id,message) on public.project_feedback to authenticated;
grant insert(project_id,author_id,revision,decision,note) on public.project_approvals to authenticated;
create policy "Read own member or admin" on public.portal_members for select to authenticated using(user_id=(select auth.uid()) or (select private.portal_admin()));
create policy "Admin inserts members" on public.portal_members for insert to authenticated with check((select private.portal_admin()) and role='client');
create policy "Admin updates members" on public.portal_members for update to authenticated using((select private.portal_admin())) with check((select private.portal_admin()));
create policy "Admin deletes members" on public.portal_members for delete to authenticated using((select private.portal_admin()) and role='client');
create policy "Read assigned projects" on public.client_projects for select to authenticated using((select private.portal_admin()) or private.portal_project_member(id));
create policy "Admin inserts projects" on public.client_projects for insert to authenticated with check((select private.portal_admin()));
create policy "Admin updates projects" on public.client_projects for update to authenticated using((select private.portal_admin())) with check((select private.portal_admin()));
create policy "Admin deletes projects" on public.client_projects for delete to authenticated using((select private.portal_admin()));
create policy "Read own assignment" on public.project_members for select to authenticated using(user_id=(select auth.uid()) or (select private.portal_admin()));
create policy "Admin inserts assignments" on public.project_members for insert to authenticated with check((select private.portal_admin()));
create policy "Admin updates assignments" on public.project_members for update to authenticated using((select private.portal_admin())) with check((select private.portal_admin()));
create policy "Admin deletes assignments" on public.project_members for delete to authenticated using((select private.portal_admin()));
create policy "Read assigned feedback" on public.project_feedback for select to authenticated using((select private.portal_admin()) or (author_id=(select auth.uid()) and private.portal_project_member(project_id)));
create policy "Members add feedback" on public.project_feedback for insert to authenticated with check(author_id=(select auth.uid()) and ((select private.portal_admin()) or private.portal_project_member(project_id)));
create policy "Read assigned approvals" on public.project_approvals for select to authenticated using((select private.portal_admin()) or (author_id=(select auth.uid()) and private.portal_project_member(project_id)));
create policy "Clients approve review stage" on public.project_approvals for insert to authenticated with check(author_id=(select auth.uid()) and private.portal_project_member(project_id) and exists(select 1 from public.client_projects p where p.id=project_id and p.status='review') and exists(select 1 from public.portal_members m where m.user_id=(select auth.uid()) and m.role='client'));
-- Initial admin bootstrap is a separate, owner-approved operation after Auth UUID verification.
-- Public signup must be disabled in Supabase Auth settings.

commit;
