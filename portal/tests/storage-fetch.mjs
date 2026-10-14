import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const source = await readFile(new URL('../storage-fetch.js', import.meta.url), 'utf8');
const { createPrivateStorageFetch } = await import('data:text/javascript,' + encodeURIComponent(source));
const calls = [];
const transport = (...args) => { calls.push(args); return Promise.resolve(new Response('test')); };
const fetch = createPrivateStorageFetch('https://test-project.supabase.co', transport);
const url = 'https://test-project.supabase.co/storage/v1/object/obanimistudio-portal-reviews/file.pdf';
await fetch(url, { headers: { Authorization: 'Bearer synthetic-test-token' } });
await fetch(new Request(url, { headers: { Authorization: 'Bearer synthetic-test-token' } }));
assert.notEqual(calls[0][0].url, calls[1][0].url);
for (const [request, options] of calls) {
  assert.equal(new URL(request.url).pathname, new URL(url).pathname);
  assert.ok(new URL(request.url).searchParams.get('portal_download'));
  assert.equal(request.headers.get('Authorization'), 'Bearer synthetic-test-token');
  assert.equal(options.cache, 'no-store');
}
for (const untouched of [
  'https://test-project.supabase.co/auth/v1/token',
  'https://test-project.supabase.co/rest/v1/client_projects',
  'https://test-project.supabase.co/storage/v1/object/public/reviews/file.pdf',
  'https://another-project.supabase.co/storage/v1/object/authenticated/reviews/file.pdf'
]) {
  await fetch(untouched);
  assert.equal(calls.at(-1)[0], untouched);
}
await fetch(url, { method: 'POST', body: 'test' });
assert.equal(calls.at(-1)[0], url);
console.log('Private downloads recheck authorization without caching; other requests are unchanged.');
