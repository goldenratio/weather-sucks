/**
 * @param {Callback} callback
 * @returns {DisposeCallback} unsub
 */
export function autoUpdate(callback) {
  const updateIntervalMs = 600000; // 10 minutes
  const idleMs = 240000; // 120000 = 2 minutes
  let lastUpdated = Date.now();

  const timerId = setInterval(() => {
    callback();
  }, updateIntervalMs);

  const onFocus = () => {
    const now = Date.now();
    const timeDiff = now - lastUpdated;
    if (timeDiff > idleMs) {
      callback();
      lastUpdated = now;
    }
  };

  const online = () => {
    callback();
  };

  window.addEventListener('focus', onFocus);
  window.addEventListener('online', online);

  return () => {
    window.clearInterval(timerId);
    window.removeEventListener('focus', onFocus);
    window.removeEventListener('online', online);
  };
}