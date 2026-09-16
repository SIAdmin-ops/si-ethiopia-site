-- Run this once in the Supabase SQL Editor for your project.
-- Creates the news_items table, RLS policies, and seeds the 4 placeholder
-- items that currently live hardcoded in src/i18n.tsx (home.news.items).

create table if not exists public.news_items (
  id uuid primary key default gen_random_uuid(),
  category smallint not null check (category between 0 and 3), -- 0 Capital Markets · 1 Technology · 2 Training · 3 Company
  item_date date not null,
  published boolean not null default true,
  title jsonb not null default '{}'::jsonb,   -- { en, am, om, ti }
  summary jsonb not null default '{}'::jsonb, -- { en, am, om, ti }
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.news_items add column if not exists image_url text;

alter table public.news_items enable row level security;

drop policy if exists "Public can read published news" on public.news_items;
create policy "Public can read published news"
  on public.news_items for select
  using (published = true);

drop policy if exists "Authenticated users can manage news" on public.news_items;
create policy "Authenticated users can manage news"
  on public.news_items for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- No seed data: the site shows an explicit "no news yet" state when this
-- table is empty (see src/sections/home/News.tsx), so nothing needs to be
-- pre-populated here. Add real articles through /admin.

-- Stores submissions from the two contact forms (the homepage's and the
-- dedicated /contact page's, see src/lib/contact.ts). Anyone can insert
-- (it's a public form); only signed-in admins can read the leads back.
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  source text not null check (source in ('home', 'contact')),
  name text not null,
  email text not null,
  organization text,
  division text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

drop policy if exists "Anyone can submit the contact form" on public.contact_submissions;
create policy "Anyone can submit the contact form"
  on public.contact_submissions for insert
  with check (true);

drop policy if exists "Authenticated users can read contact submissions" on public.contact_submissions;
create policy "Authenticated users can read contact submissions"
  on public.contact_submissions for select
  using (auth.role() = 'authenticated');
