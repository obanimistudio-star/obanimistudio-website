-- Existing-project upgrade. Apply after 001_admin_mfa.sql.
-- Dedicated PRIVATE bucket; existing public website files are not moved or changed.
begin;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('obanimistudio-portal-reviews','obanimistudio-portal-reviews',false,10485760,
 array['application/pdf','image/png','image/jpeg','image/webp'])
on conflict(id) do update set public=false,file_size_limit=10485760,
 allowed_mime_types=excluded.allowed_mime_types;

create or replace function private.portal_review_access(object_name text,writing boolean)
returns boolean language plpgsql volatile security definer set search_path=''
as $$ declare parts text[]; project_uuid uuid; review_revision integer; latest_revision integer;
begin
 if auth.uid() is null or not private.portal_mfa_allowed() then return false; end if;
 if object_name !~ '^[0-9a-f-]{36}/[1-9][0-9]{0,8}/[0-9a-f-]{36}\.(pdf|png|jpg|webp)$' then return false; end if;
 parts:=string_to_array(object_name,'/');
 begin
  project_uuid:=parts[1]::uuid; review_revision:=parts[2]::integer;
  perform split_part(parts[3],'.',1)::uuid;
 exception when invalid_text_representation or numeric_value_out_of_range then return false;
 end;
 if writing then
  if not private.portal_admin() then return false; end if;
  -- Serialize uploads against project edits and decisions. A decided version is frozen.
  select revision into latest_revision from public.client_projects where id=project_uuid for update;
  return latest_revision=review_revision and not exists(select 1 from public.project_approvals
    where project_id=project_uuid and revision=review_revision);
 end if;
 return exists(select 1 from public.client_projects p where p.id=project_uuid and p.revision>=review_revision
  and (private.portal_admin() or (exists(select 1 from public.portal_members m
   where m.user_id=auth.uid() and m.role='client') and private.portal_project_member(p.id))));
end $$;
revoke all on function private.portal_review_access(text,boolean) from public;
grant execute on function private.portal_review_access(text,boolean) to authenticated,anon;

-- Permissive policies grant the dedicated bucket's intended operations.
drop policy if exists "Portal reviews read" on storage.objects;
create policy "Portal reviews read" on storage.objects for select to authenticated
 using(bucket_id='obanimistudio-portal-reviews' and private.portal_review_access(name,false));
drop policy if exists "Portal reviews upload" on storage.objects;
create policy "Portal reviews upload" on storage.objects for insert to authenticated
 with check(bucket_id='obanimistudio-portal-reviews' and private.portal_review_access(name,true));
-- Restrictive policies prevent unrelated permissive storage policies granting access.
drop policy if exists "Portal reviews read boundary" on storage.objects;
create policy "Portal reviews read boundary" on storage.objects as restrictive for select to public
 using(bucket_id<>'obanimistudio-portal-reviews' or private.portal_review_access(name,false));
drop policy if exists "Portal reviews upload boundary" on storage.objects;
create policy "Portal reviews upload boundary" on storage.objects as restrictive for insert to public
 with check(bucket_id<>'obanimistudio-portal-reviews' or private.portal_review_access(name,true));
-- Published review files are immutable for browser users, including administrators.
drop policy if exists "Portal reviews immutable update" on storage.objects;
create policy "Portal reviews immutable update" on storage.objects as restrictive for update to public
 using(bucket_id<>'obanimistudio-portal-reviews') with check(bucket_id<>'obanimistudio-portal-reviews');
drop policy if exists "Portal reviews immutable delete" on storage.objects;
create policy "Portal reviews immutable delete" on storage.objects as restrictive for delete to public
 using(bucket_id<>'obanimistudio-portal-reviews');
commit;
