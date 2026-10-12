# Consolidated ObanimiStudio portal — development only

This draft reconciles PR #39's magic-link client experience with PR #40's many-to-many project memberships. Do NOT merge PR #39 or #40 alongside it. The existing homepage and client/church project files are untouched.

## Status
- Not connected to Supabase; config.js intentionally blank.
- schema.sql NOT executed. No client data should be entered.
- No secret keys. Use only the public Supabase project URL and publishable key after separate owner approval.
- No publishing, merging or deployment authorised.
- SQL is a new-install proposal, not an idempotent migration. Check for existing tables first.
- Owner must privately bootstrap initial administrator after confirming the invited Auth user UUID.
- Supabase Authentication: disable public signups, invite accounts, set exact site/redirect URL, review email delivery and rate limits.
- Test unauthenticated, admin, client A and client B access (including guessed project IDs), role escalation, membership edits, feedback and approval stage checks.
- Admin project editing is drafted; project creation, assignment UI, audit log, privacy retention/offboarding, dependency self-hosting, CSP and production QA are still pending.
- External CDN is pinned but should be self-hosted and CSP reviewed before release.
- GitHub Pages and noindex are NOT access controls. Security relies on Supabase RLS.
- Free plan availability and backup/restore limitations must be considered.
