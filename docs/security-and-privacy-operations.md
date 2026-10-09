# Security and privacy: operating notes

Drafted from what the codebase shows. Items marked CONFIRM need a decision from the business.

## Architecture (as inspected)
- Static React SPA (Vite) deployed with `vercel.json`; no custom server.
- Supabase provides the database, sign-in and row-level security (RLS). The browser holds only the public anon key; **RLS is the authorisation layer**, the `/admin` route guard is only UX.
- Data stored: `news_items` (public content) and `contact_submissions` (name, email, organisation, division, message).
- Third parties: Supabase, the web host (CONFIRM provider), images.unsplash.com (page images). Fonts are self-hosted. No analytics, no advertising cookies. `localStorage` holds the language choice (and the admin session in the admin area).

## One-time setup checklist
1. **Supabase, Authentication, Providers/Settings: disable "Allow new users to sign up".** The only admins should be people you invite. (Do this even after step 2.)
2. Run `supabase/security-hardening.sql` after editing `ADMIN_EMAIL_HERE`. It replaces "any signed-in user" with an admin allowlist, limits form input size, and adds a flood limit.
3. Each admin: sign in, open Admin, Security, enrol an authenticator app. Once everyone has, optionally enable the `aal2` variant at the end of the SQL file.
4. Supabase Auth settings: enable leaked-password protection and set a minimum password length of 12 or more; keep JWT expiry at 1 hour or less.
5. Fill in `src/lib/legal.ts` (every empty value is listed on the live legal pages until it is set).
6. Confirm which email domain is correct (`strategy-innovations.com` vs `strategyinnovations.com`) before publishing a privacy contact address.

## Retention and deletion (CONFIRM periods)
- Contact enquiries: delete after the period you set in `legal.ts`. Admins can delete rows (policy in the SQL file) from the Supabase table editor.
- Privacy requests: received at the privacy email; verify identity; export or delete the matching `contact_submissions` rows; reply within the time the applicable law requires.
- Admin offboarding: delete the user in Supabase Auth (this also removes their `admin_users` row).

## Incident response (outline)
1. Contain: revoke sessions (Supabase Auth, sign out all users), rotate the anon/service keys if exposed.
2. Assess what data was affected using Supabase logs.
3. Notify regulators and affected people where the applicable law requires, with counsel.
4. Record cause and fix.

## Backups
Supabase plan determines automatic backups. CONFIRM the plan and test a restore at least once.

## Maintenance
- `pnpm audit` regularly. Currently one dev-only advisory (`source-map-js`, build tooling, not shipped to visitors).
- If analytics or scripts are ever added, the Content-Security-Policy in `vercel.json` must be updated and a consent mechanism added first.
