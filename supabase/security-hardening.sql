-- Security hardening for the CMS tables. NOT applied automatically: review it,
-- then run it once in the Supabase SQL Editor (staging first if you have one).
--
-- Why: schema.sql grants full access to news_items and read access to
-- contact_submissions to ANY signed-in Supabase user (auth.role() =
-- 'authenticated'). If public sign-ups are enabled on the project, anyone who
-- registers could publish news or read every contact lead. This migration
-- replaces that with an explicit admin allowlist, adds input limits and a
-- flood limit on the public contact insert, and lets admins delete leads.
--
-- BEFORE RUNNING: replace ADMIN_EMAIL_HERE below with the real admin email(s).
-- The guard in step 2 aborts the migration if no admin row exists, so you
-- cannot lock yourself out of /admin by running it unedited.

-- 1. Admin allowlist ---------------------------------------------------------
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
-- RLS on with no policies: the browser can never read or edit this table.
alter table public.admin_users enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- 2. Seed admins, then refuse to continue if there are none ------------------
insert into public.admin_users (user_id)
select id from auth.users where email in ('ADMIN_EMAIL_HERE')
on conflict do nothing;

do $$
begin
  if not exists (select 1 from public.admin_users) then
    raise exception 'No admin users found. Edit ADMIN_EMAIL_HERE in step 2 and re-run.';
  end if;
end $$;

-- 3. News: public reads published rows only; only admins write ---------------
drop policy if exists "Authenticated users can manage news" on public.news_items;
drop policy if exists "Admins can manage news" on public.news_items;
create policy "Admins can manage news"
  on public.news_items for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- 4. Contact submissions: public insert (validated), admin read/delete -------
drop policy if exists "Authenticated users can read contact submissions" on public.contact_submissions;
drop policy if exists "Admins can read contact submissions" on public.contact_submissions;
create policy "Admins can read contact submissions"
  on public.contact_submissions for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Admins can delete contact submissions" on public.contact_submissions;
create policy "Admins can delete contact submissions"
  on public.contact_submissions for delete
  to authenticated
  using (public.is_admin());

-- Size and shape limits (NOT VALID: enforced for new rows, existing rows untouched).
alter table public.contact_submissions drop constraint if exists contact_submissions_limits;
alter table public.contact_submissions
  add constraint contact_submissions_limits check (
    char_length(name) between 1 and 200
    and char_length(email) between 3 and 254
    and position('@' in email) > 1
    and (organization is null or char_length(organization) <= 200)
    and (division is null or char_length(division) <= 100)
    and (message is null or char_length(message) <= 5000)
  ) not valid;

-- Flood limit on the public form: at most 20 submissions/minute site-wide and
-- 5/hour per email address. Blunt by design (the table has no IP column).
create or replace function public.limit_contact_submissions()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (select count(*) from public.contact_submissions
        where created_at > now() - interval '1 minute') >= 20 then
    raise exception 'Too many submissions, please try again later.';
  end if;
  if (select count(*) from public.contact_submissions
        where lower(email) = lower(new.email)
          and created_at > now() - interval '1 hour') >= 5 then
    raise exception 'Too many submissions from this address, please try again later.';
  end if;
  return new;
end;
$$;
drop trigger if exists contact_submissions_flood_limit on public.contact_submissions;
create trigger contact_submissions_flood_limit
  before insert on public.contact_submissions
  for each row execute function public.limit_contact_submissions();

-- 5. OPTIONAL, only after every admin has enrolled an authenticator app in
--    /admin (Security) and you have confirmed they can sign in with it:
--    require MFA (aal2) for admin actions. Run this to replace is_admin():
--
-- create or replace function public.is_admin()
-- returns boolean language sql stable security definer set search_path = public as $$
--   select exists (select 1 from public.admin_users where user_id = auth.uid())
--     and coalesce(auth.jwt() ->> 'aal', 'aal1') = 'aal2';
-- $$;
