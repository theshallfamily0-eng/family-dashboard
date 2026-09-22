// Minimal service worker — its only job is to satisfy Chrome's PWA
// installability requirement (a manifest alone isn't enough; Chrome also
// wants an active service worker with a fetch handler). It just passes
// every request straight through to the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
