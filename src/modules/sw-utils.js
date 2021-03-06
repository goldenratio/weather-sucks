import { toBoolean } from './utils.js';

const firstRunKey = 'weather-sucks.first-run';

/**
 * @param {Callback} newVersionInstalledCallback
 */
export function initServiceWorkers(newVersionInstalledCallback) {
  const serviceWorkerSupported = 'serviceWorker' in navigator;
  if (!serviceWorkerSupported) {
    return;
  }
  const { /** @type {ServiceWorkerContainer} **/ serviceWorker } = navigator;
  serviceWorker.addEventListener(
    'message',
    /** @type {MessageEvent} **/ event => {
      const { /** @type {string} **/ data } = event;
      switch (data) {
        case 'new-version-installed':
          const firstRun = toBoolean(localStorage.getItem(firstRunKey), true);
          if (firstRun) {
            localStorage.setItem(firstRunKey, 'false');
          } else {
            newVersionInstalledCallback();
          }
          break;
        default:
          throw Error('unknown');
      }
    }
  );

  serviceWorker.register('./service-worker.js').then(
    /** @type {ServiceWorkerRegistration} **/ registration => {
      onNewServiceWorker(registration, () => {
        if (registration.waiting) {
          registration.waiting.postMessage('force-activate');
        }
      });
    }
  );
}

/**
 * https://github.com/GoogleChrome/workbox/issues/1120
 * @param {ServiceWorkerRegistration} registration
 * @param {Callback} callback
 */
function onNewServiceWorker(registration, callback) {
  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    return callback();
  }

  const listenInstalledStateChange = () => {
    const { installing } = registration;
    if (!installing) {
      return;
    }

    installing.addEventListener(
      'statechange',
      /** @type {Event} **/ event => {
        const { target } = event;
        if (!target) {
          return;
        }

        // prettier-ignore
        const { state } = /** @type {ServiceWorker} **/ (target);
        if (state === 'installed') {
          // A new service worker is available, inform the user
          callback();
        }
      }
    );
  };

  if (registration.installing) {
    return listenInstalledStateChange();
  }

  // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,
  registration.addEventListener('updatefound', listenInstalledStateChange);
}
