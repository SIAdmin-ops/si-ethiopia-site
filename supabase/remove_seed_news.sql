-- Run this once in the Supabase SQL Editor to remove the 4 placeholder
-- news articles that schema.sql originally seeded. Matches on the exact
-- English titles so it only ever touches those specific placeholder rows,
-- never anything added later through /admin.

delete from public.news_items
where title->>'en' in (
  'Advisory Team Supports Latest Wave of ECMA-Licensed Institutions',
  'Development Pods Ship AI-Enabled Data Services for Capital Markets Clients',
  'First Cohort Graduates from the Capital Markets Certification Programme',
  'Strategy Innovations Expands Advisory Team to Support ESX Growth'
);
