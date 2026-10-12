# ObanimiStudio secure client portal — deployment checklist

**Status: development draft only. Not connected, not published, and not tested against live Supabase.**

## Architecture
- Keep existing public GitHub Pages site unchanged.
- Host the separate `/portal/` static client app on the same domain only after approval.
- Supabase Auth handles invited-user email magic links; no public self-registration.
- Postgres Row Level Security (RLS) limits clients to their own projects, feedback and approval records.
- Admins can see and manage records through approved Supabase tools; the initial UI is a client-facing project view, not a complete admin editor.
- Feedback and approvals are append-only to provide a basic history.
- No service-role key, database password or access token belongs in browser files or GitHub.

## Required owner approvals and steps (NOT yet performed)
1. Approve executing `portal/schema.sql` in the existing ObanimiStudio Supabase Free project after SQL review.
2. Review Supabase Auth settings: disable public signup, use invite-only users, configure allowed redirect URL **exactly** `https://obanimistudio.com/portal/`, and configure email sender/rate limits as appropriate. Magic-link deliverability on default email may be restricted.
3. Invite the owner's email in Authentication > Users; locate that user's UUID privately in Supabase.
4. Run the commented admin bootstrap SQL after replacing `YOUR_AUTH_USER_UUID` privately. Do not paste it into chat.
5. Test with two disposable client accounts and distinct projects; verify that client A cannot query, update or approve client B's data. Test unauthenticated requests, admin access, and sign-out.
6. Only after permission: put the Supabase **project URL** and **publishable/anon key** in `portal/config.js`. Those values are browser-visible by design; **never** use secret/service-role keys.
7. Audit JavaScript dependencies and browser security policy, then seek separate approval before merging/publishing.
8. Document privacy notice, retention/deletion procedure, backups/export plan, account offboarding, and review any UK GDPR obligations before real client data.

## Known limitations before production
- No external Supabase connection exists. Authentication and RLS are **not active** until the SQL and settings are applied.
- Project creation/editing currently happens through authorised Supabase administration; no browser admin editor yet.
- The login page references a pinned CDN script. Before publishing, review and ideally self-host the library to reduce supply-chain dependency.
- No formal security penetration test or cross-device/browser QA has been completed.
- Email magic-link delivery depends on Supabase Auth configuration and rate limits.
- Free-tier projects may pause with inactivity; do not promise continuous availability.
- No real client data should be entered until the isolation tests and privacy review pass.

## Verification matrix
- Signed out: no client data visible.
- Uninvited email: no account automatically created.
- Client A: only own projects, notes, and approvals.
- Client B: cannot access Client A's project by guessing UUID.
- Client cannot edit project progress/status or change membership role.
- Client can post feedback on own project only.
- Client can approve/request changes only on own project in `review` status.
- Admin can view assigned projects and review notes.
- Inputs rendered with textContent, never injected as HTML.
- Existing homepage, themes, animations, portfolios and projects unchanged.

## Earlier draft work
The separate draft PR #38 contains a no-API guided FAQ and permission-based testimonial email intake. Do not confuse those with verified published reviews or a generative AI service.
