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

The root ignore rules exclude additional private template/master folders and backups. Ignore rules do not remove committed files or history. `python3 portal/tests/credential_guard.py` checks staged files and exits nonzero on recognised credential patterns or sensitive filenames; it never prints matched values. `--self-test` runs synthetic checks. The portal pull-request workflow now scans every tracked index file with this guard in addition to its synthetic tests. GitHub push rules and workstation enforcement are not configured. Provider secret scanning/push protection still require settings review. Dashboard account MFA and a backup authenticator were confirmed separately; portal MFA was enrolled and its migration applied on staging. Do not treat this public development branch as private storage.

## Staging verification — 14 October 2026

The owner deployed the MFA ZIP to the staging Pages project, enrolled the portal administrator, applied `001_admin_mfa.sql` successfully, and confirmed a fresh sign-in required an authenticator code before projects loaded. The unassigned test client still saw no assigned projects and no administrator controls. These are owner-reported UI results, not captured authenticated API tests.

A subsequent signed-out REST check returned HTTP 401 / PostgreSQL 42501 for each of the five portal tables. Automated staging asset downloads returned HTTP 403, so exact deployed-byte comparison remains unverified.

`tests/hosted-access.sql` was run by the owner in the hosted SQL Editor. The 18:56 screenshot reports: “PASS: all 19 database checks passed; temporary setup rolled back”. These checks use simulated authenticated roles and assurance claims. It does not change projects/accounts, mint real tokens, or replace authenticated HTTP and concurrency checks. Missing test prerequisites deliberately fail rather than passing vacuously.


## Repeatable isolated test run

Run `npm ci --ignore-scripts` in `portal/tests`, followed by `npm run security` and `npm run browser` (install Chromium with `npx playwright install chromium` first). `npm run concurrency` additionally needs a disposable PostgreSQL instance on 127.0.0.1:5432, with the local postgres user allowed to create a test database. An alternate local port can be specified with PORTAL_TEST_PGPORT. No remote database URL is accepted. Never configure this suite with real accounts or hosted credentials.

`tests/concurrency.mjs` uses three separate PostgreSQL connections and waits for a database lock to prove operations overlap. It checks competing revision-filtered saves, stale approval after an edit, approval before an edit, duplicate decisions and independent reviewers. It creates and drops a synthetic test database. It is not a hosted Supabase concurrency test.

The Portal checks pull-request workflow runs the database, concurrency and mocked browser suites against an isolated PostgreSQL 17 service with read-only repository permissions. It receives no hosted secrets and performs no deployment. Run 38612968561 completed successfully on 14 October 2026 at commit f701e65: 50 database security checks, all five real concurrent transaction scenarios, browser regressions and credential-guard self-tests passed. Evidence: https://github.com/obanimistudio-star/obanimistudio-website/actions/runs/38612968561. This validates the isolated schema and UI code, not hosted authenticated HTTP requests.


## Owner-completed live tests — 14 October 2026, 19:20–19:37 BST

The owner supplied screenshots and confirmed these deployed staging flows after the MFA upgrade:

- Administrator changed the Client 2 Isolation Test from 0% / revision 1 to 10% / revision 2; it remained at 10% after refresh.
- Administrator granted Test Client 2 access; the control changed to Remove access.
- Test Client 2 loaded the assigned project at 10% / revision 2 with the client interface.
- Test Client 2 submitted new feedback, visible in the project activity.
- Administrator removed the assignment; refreshing the client session returned No projects assigned yet.

These are successful real-session UI workflows, which use the hosted API. They do not prove arbitrary forged/guessed-ID requests are denied. No further owner screenshot requests are pending. The final test state leaves Test Client 2 unassigned and preserves its test feedback; the test project remains at 10% / revision 2.

The portal remains on staging and PR #41 remains draft. Main-domain publishing, merge, private-preview migration and any paid upgrade have not been performed. Actual hosted denied-request testing needs an authenticated test session accessible to the test runner; the owner's tablet login cannot supply that here. Do not transfer tokens or credentials through chat. Public preview files remain public, and no private source/template protection is claimed.


## Private review delivery upgrade (prepared; not yet deployed)

`migrations/002_private_reviews.sql` creates the dedicated private bucket `obanimistudio-portal-reviews`, limited to PDF/PNG/JPEG/WebP review files up to 10 MB. Apply it only after 001. It does not move or privatise any existing public website files. The private-file UI and migration must both be deployed and verified before use.

Every download uses the signed-in user's authenticated Storage request; no public or signed bearer URLs are produced. Clients can read files only while assigned. Administrator upload requires MFA, the current project revision and no existing decision for that revision. A project row lock serializes uploads with edits/decisions. Restrictive bucket policies prevent unrelated permissive Storage policies bypassing these limits. Other buckets are unchanged. Browser overwrite/delete is disabled; a new project version needs fresh review files. Already-downloaded copies cannot be recalled.

Review files provide confidential PDF/image review, not private hosting for interactive websites or source templates. Existing website previews retain their own access settings. Keep confidential source outside public GitHub and public website directories.

Production preparation: callback config now selects only the exact main or staging callback for its current origin; unknown origins fail setup. Both exact callbacks must be verified in Supabase Auth before publishing. The existing public-site service worker bypasses portal and Supabase requests. Cloudflare `_headers` rules apply only to /portal/*; GitHub Pages ignores this file, so main-site response-header protection requires hosting configuration. The portal also blocks its UI/authentication when framed.

Release remains blocked until the connected Supabase commands are callable, 002 is applied to the intended project, private Storage upload/download/revocation and actual hosted denied requests are verified, and the main callback is confirmed. The owner has authorised publication once the checks pass. Do not merge or publish the unverified upgrade.
