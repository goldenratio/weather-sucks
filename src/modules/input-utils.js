import { noop } from './utils.js';

/** @type {Map<HTMLElement|Node, Array<Point>>} **/
const moveListMap = new Map();

/** @type {Map<HTMLElement|Node, boolean>} **/
const clickMap = new Map();

/** @type {boolean} **/
const pointerSupported = typeof PointerEvent !== 'undefined';

/**
 * @param {HTMLElement|Node} element
 * @param {Callback} callback
 * @return {DisposeCallback}
 */
export function onClick(element, callback) {
  const listener = () => {
    callback();
  };
  element.addEventListener('click', listener);
  return () => {
    element.removeEventListener('click', listener);
  };
}

/**
 * @param {HTMLElement|Node} element
 * @param {Callback} [clickCallback]
 * @param {Callback} [swipeUpCallback]
 * @param {Callback} [swipeDownCallback]
 * @return {DisposeCallback}
 */
export function onPointer(element, clickCallback = noop, swipeUpCallback = noop, swipeDownCallback = noop) {
  if (!pointerSupported) {
    return onClick(element, clickCallback);
  }

  const onMove = (/** @type {Event} **/ event) => {
    // prettier-ignore
    const pointerEvent = /** @type {PointerEvent}**/ (event);
    const { movementX, movementY } = pointerEvent;
    const list = moveListMap.get(element) || [];
    list.push({ x: movementX, y: movementY });
    moveListMap.set(element, list);
  };

  const onDown = () => {
    const list = moveListMap.get(element);
    if (list) {
      list.length = 0;
    }

    clickMap.set(element, true);
    element.addEventListener('pointermove', onMove);
  };

  const onUp = () => {
    element.removeEventListener('pointermove', onMove);
    const list = moveListMap.get(element);
    if (list && list.length >= 2) {
      const validSwipeUp = list.every(({ y }) => y <= 1);
      if (validSwipeUp) {
        swipeUpCallback();
      }

      const validSwipeDown = list.every(({ y }) => y >= 1);
      if (validSwipeDown) {
        swipeDownCallback();
      }
    } else {
      const wasClicked = clickMap.get(element);
      if (typeof wasClicked === 'boolean' && wasClicked === true) {
        clickCallback();
        clickMap.set(element, false);
      }
    }
  };

  element.addEventListener('pointerdown', onDown);
  document.addEventListener('pointerup', onUp);

  return () => {
    element.removeEventListener('pointermove', onMove);
    element.removeEventListener('pointerdown', onDown);
    document.removeEventListener('pointerup', onUp);
  };
}
