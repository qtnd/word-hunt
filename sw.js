const CACHE_NAME = 'wordhunt-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Ajoutez vos fichiers css/js/images ici
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
