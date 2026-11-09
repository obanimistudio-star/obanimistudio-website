const CACHE_NAME = 'obanimistudio-os-v33-premium-4k-experience';
const APP_FILES = [
  './', './index.html', './styles.css', './refinement.css?v=20261019-metal2',
  './premium-4k.css?v=20261109-master2', './script.js', './manifest.webmanifest',
  './assets/brand/obanimistudio-os-logo.svg',
  './assets/brand/responsive/obanimistudio-os-logo-320.avif',
  './assets/brand/responsive/obanimistudio-os-logo-320.webp',
  './assets/media/responsive/studio-showcase-poster-1080.webp',
  './assets/icons/app-icon-64.png', './assets/icons/app-icon-192.png',
  './assets/icons/app-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
  )));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/portal/') || url.hostname.endsWith('.supabase.co')) return;
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  if (event.request.destination === 'style' || event.request.destination === 'script') {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
