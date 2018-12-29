// @ts-nocheck
// having issues with ServiceWorker types

const version = '9.0.0'; // version needs to be updated manually for now
const projectName = 'weather-sucks';
const preCacheName = `${projectName}-precache-${version}`;
const runtimeCacheName = `${projectName}-runtimeCache-${version}`;

const cacheUrls = [
  './index.html',
  './', // Alias for index.html
  './style.css',
  './app.js'
];

/** @type {ServiceWorkerGlobalScope} **/
const worker = self;
// The install handler takes care of precaching the resources we always need.
worker.addEventListener('install', /** @type {ExtendableEvent} **/event => {
  event.waitUntil(
    caches.open(preCacheName)
      .then(cache => cache.addAll(cacheUrls))
      .then(() => {
        return worker.skipWaiting();
      })
  );
});

// The activate handler takes care of cleaning up old caches.
worker.addEventListener('activate', /** @type {ExtendableEvent} **/event => {
  const currentCaches = [preCacheName, runtimeCacheName];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
      })
      .then(cachesToDelete => {
        return Promise.all(cachesToDelete.map(cacheToDelete => {
          return caches.delete(cacheToDelete);
        }));
      })
      .then(() => worker.clients.claim())
  );
});

worker.addEventListener('fetch', /** @type {FetchEvent} **/event => {
  // ignore requests to OpenWeather API
  const requestsFromApp = event.request.url.startsWith(worker.location.origin);
  if (!requestsFromApp) {
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(runtimeCacheName)
          .then(cache => {
            return fetch(event.request)
              .then(response => {
                // Put a copy of the response in the runtime cache.
                return cache.put(event.request, response.clone())
                  .then(() => {
                    return response;
                  });
              });
          });
      })
  );
});

// https://github.com/GoogleChrome/workbox/issues/1120
worker.addEventListener('message', /** @type {MessageEvent} **/event => {
  const { /** @type {string} **/data } = event;
  switch (data) {
    case 'force-activate':
      worker.skipWaiting();
      if (worker.clients) {
        worker.clients.claim();
        worker.clients.matchAll()
          .then(clients => {
            clients.forEach(client => client.postMessage('new-version-installed'));
          });
      }
      break;
  }
});
