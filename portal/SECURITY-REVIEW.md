# Development security review

Scope: current tracked repository files and consolidated portal changes. The initial review used no hosted queries; staging follow-up results are recorded below. No main-branch writes or deployment. No full-history or compiled-asset reverse-engineering audit has been completed.

## Findings addressed in this draft

- Reset broad authenticated grants, including TRUNCATE; use column grants for safe updates/inserts.
- Keep administrator provisioning outside browser writes.
- Bind approvals to server-generated revisions; reject stale versions and duplicates.
- Prevent async loads from restoring private content after sign-out/session change.
- Self-host an updated sign-in SDK instead of the older CDN dependency with advisory GHSA-8r88-6cj9-9fh5.
- Add private operational audit records and restrict feedback visibility.
- Add safe text rendering, HTTPS URL checks, CSP and no-referrer.

## Exposure review

A pattern scan of the current text files found no obvious Supabase secret-key, private-key, AWS access-key or GitHub-token patterns. This does not prove that no secrets exist, especially in history, binaries, encoded values or compiled assets.

Both existing Destination of Peace review-page files implement browser-side password checks with session storage and client-side digests. Their source and any statically shipped assets are accessible in the public repository. A password gate or hash in JavaScript cannot protect template source or public assets. Those files are intentionally unchanged. This is a release concern requiring a separate plan, not a claim that they have been secured by this dashboard.

Public business contact addresses occur in current site files; the scan did not classify all content as private/public. No real client identities, preview URLs, email addresses or project templates have been added to portal files. Sanitized synthetic IDs are used in tests.

## Open release work

Direct authenticated HTTP denial/guessed-ID tests, hosted expiry, immutable review artifacts, privacy/retention/offboarding decisions, full-history credential assessment and private asset migration. Successful real-session UI writes and native isolated concurrency are recorded below. Administrator MFA and project-specific CSP have been implemented; the owner also passed the 19 hosted role/assurance checks. No guarantee of complete privacy or production readiness is made.

## Validation completed for this draft

50 disposable local database security checks passed, including administrator MFA enforcement. Mocked browser checks passed for setup blocking, safe rendering and links, project creation, assignments, client version approval and late-response clearing after sign-out; zero external requests were made by those checks. The pinned SDK dependency audit reported zero known vulnerabilities at review time. JavaScript syntax and git whitespace checks passed.

## Staging follow-up — 14 October 2026

Owner screenshots and confirmation show UI deployment, portal administrator TOTP enrollment, successful migration execution, a fresh MFA sign-in, and an unassigned-client empty view after the upgrade. Five signed-out REST reads were denied with HTTP 401 / code 42501. Automated Pages asset downloads were blocked with HTTP 403. Subsequent owner screenshots confirm successful authenticated UI update/assignment/feedback/revocation flows; direct denied/guessed-ID HTTP tests, hosted expiry and private asset protection remain unverified. Native concurrency is covered in CI. The owner subsequently ran tests/hosted-access.sql; the 18:56 screenshot reports all 19 database checks passed and temporary setup rolled back. These simulated roles/claims do not certify actual authenticated HTTP requests.


## Additional regression coverage

Browser regression coverage now includes rejected stale saves (including the revision filter), and session-expiry events while activity loads are pending. A separate concurrency suite uses independent native PostgreSQL sessions and verifies lock waits before releasing competing transactions. A pull-request workflow provides a disposable local PostgreSQL 17 instance. Run 38612968561 completed successfully at commit f701e65 on 14 October 2026: all five native PostgreSQL concurrency scenarios and expanded mocked browser regressions passed, alongside the 50 security checks and credential-guard self-tests. Actual hosted HTTP authentication/authorization and private preview delivery are still separate release gates. Evidence: https://github.com/obanimistudio-star/obanimistudio-website/actions/runs/38612968561.


## Live UI evidence — 19:20–19:37 BST

Owner screenshots confirm administrator update to 10% / revision 2, assignment grant, assigned-client read, new client feedback and revocation. The owner confirmed persistence of the administrator update after refresh. After access removal, the client refresh showed No projects assigned yet. This establishes these successful hosted API paths through the deployed UI, not arbitrary HTTP denial tests. The test client is left unassigned. Existing feedback is retained; no accounts or project records were deleted.

The portal CI workflow also scans all tracked index files for recognised credential patterns using `credential_guard.py --tracked`. It reports only paths and categories. This is not a full-history scan or a guarantee that no secret exists. No production release, private asset migration or paid plan change was made.


## Private review delivery preparation

The new review module uses a private Storage bucket and authenticated downloads, with per-project/revision paths, administrator MFA, client assignment checks, immutable objects and closed uploads after the first decision. Uploads lock the project row to serialize against decisions and edits. A disposable Storage/RLS model includes deliberately broad legacy policies to test the restrictive boundaries. Native concurrency coverage adds upload/approval/edit races. Hosted Storage behavior is still unverified until migration 002 is applied and real HTTP checks pass.

The root service worker bypasses portal/Supabase requests; main/staging callbacks are origin-specific and unknown origins fail closed. Cloudflare-only header rules are supplied; these are not applied by GitHub Pages. Framed portal UI is blocked before Auth starts. These changes are prepared in the draft and are not a production deployment. Public preview sources remain public; protected PDF/image delivery does not retroactively privatise them.
