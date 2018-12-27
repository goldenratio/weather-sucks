const version = "0.1.0";
const cacheName = `weather-sucks-${version}`;

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {

});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {

});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});