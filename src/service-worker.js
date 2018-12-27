const version = '2.0.0'; // version needs to be updated manually for now
const preCacheName = `weather-sucks-precache-${version}`;
const runtimeCacheName = `weather-sucks-runtimeCache-${version}`;

const cacheUrls = [
  './index.html',
  './', // Alias for index.html
  './style.css',
  './app.mjs'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(preCacheName)
      .then(cache => cache.addAll(cacheUrls))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
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
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // ignore requests to OpenWeather API
  const requestsFromApp = event.request.url.startsWith(self.location.origin);
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
self.addEventListener('message', (event) => {
  if (!event || !event.data) {
    return;
  }
  switch (event.data) {
    case 'force-activate':
      self.skipWaiting();
      if (self.clients) {
        self.clients.claim();
        self.clients.matchAll()
          .then(clients => {
            clients.forEach(client => client.postMessage('new-version-installed'));
          });
      }
      break;
    default:
      // NOOP
      break;
  }
});
