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

Authenticated HTTP isolation/write tests, concurrent edit/approval behavior, expiry, immutable review artifacts, privacy/retention/offboarding decisions, full-history credential assessment and private asset migration. Administrator MFA and project-specific CSP have been implemented; hosted policy verification remains a separate check. No guarantee of complete privacy or production readiness is made.

## Validation completed for this draft

50 disposable local database security checks passed, including administrator MFA enforcement. Mocked browser checks passed for setup blocking, safe rendering and links, project creation, assignments, client version approval and late-response clearing after sign-out; zero external requests were made by those checks. The pinned SDK dependency audit reported zero known vulnerabilities at review time. JavaScript syntax and git whitespace checks passed.

## Staging follow-up — 14 October 2026

Owner screenshots and confirmation show UI deployment, portal administrator TOTP enrollment, successful migration execution, a fresh MFA sign-in, and an unassigned-client empty view after the upgrade. Five signed-out REST reads were denied with HTTP 401 / code 42501. Automated Pages asset downloads were blocked with HTTP 403. Hosted authenticated HTTP writes, guessed-ID tests, concurrency, expiry and private asset protection remain unresolved. A rollback-only SQL role/assurance check is supplied in tests/hosted-access.sql; it has not been run against the hosted database by this agent.
