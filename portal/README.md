# Consolidated ObanimiStudio portal — development only

Continues draft PR #41 and replaces the competing PR #39 / #40 proposals. Do not merge those proposals alongside this one. Dashboard changes are isolated to `portal/`; repository safeguards also extend `.gitignore`. the homepage, domain, branding, themes and church/client project files remain unchanged.

## Current state

- Public browser configuration targets the existing Free Supabase project and the staging portal callback. It contains a publishable key only.
- The existing staging schema and two-client assignment/revocation flow were exercised manually. `schema.sql` is for a new installation only; never rerun it over the existing database. `migrations/001_admin_mfa.sql` is the separate, repeatable upgrade for administrator MFA; the owner applied it on 14 October 2026.
- No credentials, client records or private templates are included. This repository and its development branches are public.
- Project creation/editing, invited-client registration and assignment/removal controls are drafted. Invitations are intentionally done privately in Supabase; no privileged key belongs in browser code.
- Database grants reset PUBLIC/anon/authenticated defaults before applying narrow permissions, including removal of TRUNCATE and role-change access.
- RLS scopes projects by assignment. Clients see only their own feedback/decisions while still assigned; administrators can review all activity. Removed assignments revoke database visibility.
- Approvals identify a project revision, only work during review, and cannot be duplicated or rewritten. Changes increment the revision in the database. A locked version check rejects outdated approvals. Preview contents themselves need immutable versions: editing a website behind the same URL cannot be detected by SQL.
- Administrator roles are provisioned privately after owner approval. Browser writes cannot create/promote/delete an administrator.
- Audit records are in a private table with no browser read/write grants. They record actor/object/action/time, not message contents. This is an operational log, not a tamper-proof archive against the database owner.
- Auth access/refresh tokens use per-tab sessionStorage. Only the one-time PKCE verifier uses a portal-specific localStorage key so email callbacks can open a new tab in the same browser; the SDK removes it after exchange. Links opened on another device/browser must be requested again there. Multiple pending link requests may replace the verifier. Auth clears displayed private data on session changes/sign-out. A generation check prevents stale async reads restoring prior data.
- No CDN runtime dependency; the pinned Supabase SDK is bundled locally. CSP limits scripts/styles to this origin and connections to Supabase. connect-src is restricted to the configured project. Meta CSP cannot enforce frame-ancestors; frame protection requires a hosting response header.

## Checks

`node portal/tests/security.mjs` uses @electric-sql/pglite 0.3.14 and an in-memory, disposable PostgreSQL database. It never connects to Supabase. It exercises anonymous access, broad legacy default grants/TRUNCATE, client isolation, role escalation, forged feedback, stage/version approvals, immutable decisions, admin workflows, revocation, audit recording and database-level administrator MFA, including administrators with client assignments and repeated migration application.

`node portal/tests/browser.cjs` uses Playwright with a temporary local server it starts on port 8765 and a mocked Supabase module. It does not use real accounts. It exercises blank configuration, safe rendering/URLs, creation, assignments and sign-out clearing, administrator MFA setup, rejected codes, verification, existing factors and QR/key clearing.

Real Supabase authentication, PostgREST permissions, invitation/email delivery, simultaneous database transactions, expiry and multi-account RLS remain mandatory before launch. Local checks are not production certification.

## Staging rollout and remaining checks

1. Keep this PR in draft. Deploy the updated portal UI to staging first, preserving the exact staging callback in Supabase Auth. Do not publish to the main domain or merge this branch.
2. With owner dashboard access retained, inspect the existing policies and apply only `migrations/001_admin_mfa.sql` in the existing project's SQL editor. The migration is transactional and repeatable; it adds restrictive policies without changing roles, assignments or project data. It blocks administrator project access until an aal2 session is present, while allowing the administrator's own membership read for enrollment. All original authorization policies still apply.
3. Sign in to the staging portal as its administrator. Select **Set up portal authenticator**, scan its new QR, and verify a fresh code. Supabase dashboard MFA and its backup are already enrolled, but they do not enroll this separate portal account. Keep QR images, manual keys and codes private.
4. Verify authenticated API access at aal1 and aal2, client A/client B isolation, guessed IDs, forbidden role/membership writes, access removal, logout/expiry and concurrent edit/approval conflicts against staging. Local tests use a disposable database and mocked Auth only; they do not certify the hosted deployment. Existing manual UI tests confirmed assignment separation and no-projects views after revocation.
5. Decide privately what client data to retain/export/delete on offboarding. Auth-user deletion is blocked by authored feedback/approvals. Resolve private preview/template delivery separately: public websites and unguessable paths do not provide authenticated asset access. Preserve current public sites until an approved migration is ready.
6. Obtain explicit merge/production publishing approval after release checks pass. Stay on the Free plan.

Administrator MFA enforcement fails closed in the database, including direct API calls and client-assignment paths. A dashboard database owner remains able to manage account recovery; no dashboard credentials belong in this repository.

## Sources reviewed

- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/auth/server-side/advanced-guide

## Repository protection draft

The root ignore rules exclude additional private template/master folders and backups. Ignore rules do not remove committed files or history. `python3 portal/tests/credential_guard.py` checks staged files and exits nonzero on recognised credential patterns or sensitive filenames; it never prints matched values. `--self-test` runs synthetic checks. This script is not yet enforced by GitHub push rules, CI or the owner's workstation. Provider secret scanning/push protection still require settings review. Dashboard account MFA and a backup authenticator were confirmed separately; portal MFA was enrolled and its migration applied on staging. Do not treat this public development branch as private storage.

## Staging verification — 14 October 2026

The owner deployed the MFA ZIP to the staging Pages project, enrolled the portal administrator, applied `001_admin_mfa.sql` successfully, and confirmed a fresh sign-in required an authenticator code before projects loaded. The unassigned test client still saw no assigned projects and no administrator controls. These are owner-reported UI results, not captured authenticated API tests.

A subsequent signed-out REST check returned HTTP 401 / PostgreSQL 42501 for each of the five portal tables. Automated staging asset downloads returned HTTP 403, so exact deployed-byte comparison remains unverified.

`tests/hosted-access.sql` was run by the owner in the hosted SQL Editor. The 18:56 screenshot reports: “PASS: all 19 database checks passed; temporary setup rolled back”. These checks use simulated authenticated roles and assurance claims. It does not change projects/accounts, mint real tokens, or replace authenticated HTTP and concurrency checks. Missing test prerequisites deliberately fail rather than passing vacuously.


## Repeatable isolated test run

Run `npm ci --ignore-scripts` in `portal/tests`, followed by `npm run security` and `npm run browser` (install Chromium with `npx playwright install chromium` first). `npm run concurrency` additionally needs a disposable PostgreSQL instance on 127.0.0.1:5432, with the local postgres user allowed to create a test database. An alternate local port can be specified with PORTAL_TEST_PGPORT. No remote database URL is accepted. Never configure this suite with real accounts or hosted credentials.

`tests/concurrency.mjs` uses three separate PostgreSQL connections and waits for a database lock to prove operations overlap. It checks competing revision-filtered saves, stale approval after an edit, approval before an edit, duplicate decisions and independent reviewers. It creates and drops a synthetic test database. It is not a hosted Supabase concurrency test.

The Portal checks pull-request workflow runs the database, concurrency and mocked browser suites against an isolated PostgreSQL 17 service with read-only repository permissions. It receives no hosted secrets and performs no deployment. Its result must be inspected before marking concurrency validated.
