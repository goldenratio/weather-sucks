/**
 * @param {function(): void} newVersionInstalledCallback
 */
export function initServiceWorkers(newVersionInstalledCallback) {
  const serviceWorkerSupported = 'serviceWorker' in navigator;
  if (!serviceWorkerSupported) {
    return;
  }
  const { serviceWorker } = navigator;
  serviceWorker.addEventListener('message', (event) => {
    if (!event || !event.data) {
      return;
    }
    switch (event.data) {
      case 'new-version-installed':
        newVersionInstalledCallback();
        break;
    }
  });

  serviceWorker.register('./service-worker.js')
    .then(/** @type {ServiceWorkerRegistration} **/registration => {
      onNewServiceWorker(registration, () => {
        if (registration.waiting) {
          registration.waiting.postMessage('force-activate');
        }
      });
    });
}

/**
 * https://github.com/GoogleChrome/workbox/issues/1120
 * @param {ServiceWorkerRegistration} registration
 * @param {function() : void} callback
 */
function onNewServiceWorker(registration, callback) {
  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    return callback();
  }

  const listenInstalledStateChange = () => {
    registration.installing.addEventListener('statechange', event => {
      if (event.target.state === 'installed') {
        // A new service worker is available, inform the user
        callback();
      }
    });
  };

  if (registration.installing) {
    return listenInstalledStateChange();
  }

  // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,
  registration.addEventListener('updatefound', listenInstalledStateChange);
}
