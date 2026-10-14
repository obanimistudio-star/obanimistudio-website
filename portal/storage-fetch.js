// Private Storage responses can be cached per token. Each download needs a
// fresh authorization check after assignments change, including in another tab.
export function createPrivateStorageFetch(projectUrl, transport = globalThis.fetch) {
  const origin = new URL(projectUrl).origin;
  return (input, init) => {
    const request = new Request(input, init);
    const url = new URL(request.url);
    const privateFile = url.pathname.startsWith('/storage/v1/object/obanimistudio-portal-reviews/') ||
      url.pathname.startsWith('/storage/v1/object/authenticated/obanimistudio-portal-reviews/');
    if (request.method === 'GET' && url.origin === origin && privateFile) {
      url.searchParams.set('portal_download', crypto.randomUUID());
      return transport(new Request(url, request), { cache: 'no-store' });
    }
    return transport(input, init);
  };
}
