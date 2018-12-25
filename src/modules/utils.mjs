/**
 * @param {string} forecast
 * @returns {string}
 */
export function getForecastIcon(forecast) {
  const key = forecast.toLowerCase();

  if (stringContains(key, ['mist', 'dust', 'haze'])) {
    return '';
  }

  if (key.indexOf('clear') >= 0) {
    const day = isDay();
    return day ? '' : '';
  }

  if (key.indexOf('rain') >= 0) {
    return '';
  }

  if (key.indexOf('snow') >= 0) {
    return '';
  }

  if (key.indexOf('clouds') >= 0) {
    return '';
  }

  if (key.indexOf('drizzle') >= 0) {
    return '';
  }

  if (key.indexOf('smoke') >= 0) {
    return '';
  }

  if (key.indexOf('smog') >= 0) {
    return '';
  }

  if (key.indexOf('thunder') >= 0) {
    return '';
  }

  if (key.indexOf('fog') >= 0) {
    return '';
  }

  if (key.indexOf('fire') >= 0) {
    return '';
  }

  if (key.indexOf('flood') >= 0) {
    return '';
  }

  if (key.indexOf('hurricane') >= 0) {
    return '';
  }

  if (key.indexOf('tornado') >= 0) {
    return '';
  }

  return '';
}

/**
 * @param {string} forecast
 * @returns {BackgroundType}
 */
export function getBackground(forecast) {
  const key = forecast.toLowerCase();

  if (stringContains(key, ['mist', 'haze', 'smoke', 'fog'])) {
    return 'mist';
  }

  if (stringContains(key, ['cloud'])) {
    return 'clouds';
  }

  if (stringContains(key, ['rain'])) {
    return 'rain';
  }

  if (stringContains(key, ['drizzle'])) {
    return 'drizzle';
  }

  if (stringContains(key, ['snow'])) {
    return 'snow';
  }

  if (stringContains(key, ['sleet'])) {
    return 'sleet';
  }

  if (stringContains(key, ['clear'])) {
    const day = isDay();
    return day ? 'clear-day' : 'clear-night';
  }
  return 'default';
}

/**
 * @param {number} kelvin
 * @param {Unit} unit
 * @throws {Error}
 * @returns {number}
 */
export function convertKelvinTo(kelvin, unit) {
  if (typeof kelvin !== 'number') {
    return undefined;
  }

  if (unit === 'C') {
    return Math.round(kelvin - 273.15);
  }

  if (unit === 'F') {
    return Math.round((kelvin - 273.15) * (9/5) + 32);
  }

  throw Error('unknown unit: ' + unit);
}

/**
 * @param {string|number} value
 * @throws {Error}
 * @returns {number}
 */
export function toInt(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    return parseInt(value, 10) || 0;
  }

  throw Error('invalid type');
}

/**
 * @returns {boolean}
 */
export function isDay() {
  const hours = new Date().getHours();
  return hours > 6 && hours < 18;
}

/**
 * @param {string} str
 * @param {Array<string>} list
 * @returns {boolean}
 */
export function stringContains(str, list) {
  return list.some(entry => str.includes(entry));
}

/**
 * @return {void}
 */
export function noop() {
  //
}