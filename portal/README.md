# Consolidated ObanimiStudio portal — development only

Continues draft PR #41 and replaces the competing PR #39 / #40 proposals. Do not merge those proposals alongside this one. Only `portal/` changes; the homepage, domain, branding, themes and church/client project files remain unchanged.

## Current state

- Supabase is not connected: config.js has blank URL/key values.
- schema.sql has NOT run against the owner's Supabase project. It is an atomic, new-install proposal, not an upgrade migration. Existing objects and policies must be inspected first.
- No credentials, client records or private templates are included. This repository and its development branches are public.
- Project creation/editing, invited-client registration and assignment/removal controls are drafted. Invitations are intentionally done privately in Supabase; no privileged key belongs in browser code.
- Database grants reset PUBLIC/anon/authenticated defaults before applying narrow permissions, including removal of TRUNCATE and role-change access.
- RLS scopes projects by assignment. Clients see only their own feedback/decisions while still assigned; administrators can review all activity. Removed assignments revoke database visibility.
- Approvals identify a project revision, only work during review, and cannot be duplicated or rewritten. Changes increment the revision in the database. A locked version check rejects outdated approvals. Preview contents themselves need immutable versions: editing a website behind the same URL cannot be detected by SQL.
- Administrator roles are provisioned privately after owner approval. Browser writes cannot create/promote/delete an administrator.
- Audit records are in a private table with no browser read/write grants. They record actor/object/action/time, not message contents. This is an operational log, not a tamper-proof archive against the database owner.
- Auth access/refresh tokens use per-tab sessionStorage. Only the one-time PKCE verifier uses a portal-specific localStorage key so email callbacks can open a new tab in the same browser; the SDK removes it after exchange. Links opened on another device/browser must be requested again there. Multiple pending link requests may replace the verifier. Auth clears displayed private data on session changes/sign-out. A generation check prevents stale async reads restoring prior data.
- No CDN runtime dependency; the pinned Supabase SDK is bundled locally. CSP limits scripts/styles to this origin and connections to Supabase. Before release narrow connect-src to the actual project. Meta CSP cannot enforce frame-ancestors; frame protection requires a hosting response header.

## Checks

`node portal/tests/security.mjs` uses @electric-sql/pglite 0.3.14 and an in-memory, disposable PostgreSQL database. It never connects to Supabase. It exercises anonymous access, broad legacy default grants/TRUNCATE, client isolation, role escalation, forged feedback, stage/version approvals, immutable decisions, admin workflows, revocation and audit recording.

`node portal/tests/browser.cjs` uses Playwright with a temporary local server it starts on port 8765 and a mocked Supabase module. It does not use real accounts. It exercises blank configuration, safe rendering/URLs, creation, assignments and sign-out clearing.

Real Supabase authentication, PostgREST permissions, invitation/email delivery, simultaneous database transactions, expiry and multi-account RLS remain mandatory before launch. Local checks are not production certification.

## Next approval gates

1. Review the proposed installation and existing Supabase objects without exposing secrets. Obtain separate approval before configuring Auth, connecting the website, executing SQL or bootstrapping an administrator. Disable public signup, use invited verified accounts, exact redirect `https://obanimistudio.com/portal/`, and verify email delivery/rate limits on the existing Free project. Do not upgrade plans.
2. After approved installation, test admin, client A, client B and an unregistered authenticated account directly through the API. Test guessed IDs, role/membership writes, access removal, logout/expiry, stale approval/edit conflicts and project sharing. Require administrator MFA before handling real client data; enforcement/setup remain a launch task.
3. Privately decide what client data to retain and how to export/delete it on offboarding. Current auth-user deletion is blocked by authored feedback/approvals, intentionally requiring an approved retention decision first.
4. Resolve existing public preview/template exposure. GitHub Pages, unguessable paths, noindex and browser password checks are not access controls. Store truly private assets behind authenticated storage/backend delivery; preserve existing public websites until an owner-approved migration is ready.
5. Obtain separate merge/publishing approval only after all release checks pass. Do not deploy the development branch.

## Sources reviewed

- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/auth/server-side/advanced-guide
