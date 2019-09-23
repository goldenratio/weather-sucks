/**
 * @param {string} forecast
 * @returns {string}
 */
export function getForecastIcon(forecast) {
  const key = forecast.toLowerCase();

  if (stringContains(key, ['mist', 'dust', 'haze'])) {
    return '';
  }

  if (stringContains(key, ['sleet'])) {
    return '';
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
 * @returns {number|undefined}
 */
export function convertKelvinTo(kelvin, unit) {
  if (typeof kelvin !== 'number') {
    return undefined;
  }

  if (unit === 'C') {
    return Math.round(kelvin - 273.15);
  }

  if (unit === 'F') {
    return Math.round((kelvin - 273.15) * (9 / 5) + 32);
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
 * @param {string|boolean|null|undefined} value
 * @param {boolean} fallbackValue
 * @throws {Error}
 * @return {boolean}
 */
export function toBoolean(value, fallbackValue) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    const lowercaseValue = value.toLowerCase();
    if (lowercaseValue === 'true' || lowercaseValue === '1') {
      return true;
    } else if (lowercaseValue === 'false' || lowercaseValue === '0') {
      return false;
    } else {
      return fallbackValue;
    }
  }

  if (typeof value === 'undefined' || value === null) {
    return fallbackValue;
  }

  throw Error('unknown type of value');
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
 * @param {string|undefined|null} val
 * @return {Unit}
 */
export function toUnit(val) {
  if (typeof val === 'string') {
    const valUpperCase = val.toUpperCase();
    if (valUpperCase === 'C' || valUpperCase === 'F') {
      return valUpperCase;
    }
  }
  return 'C';
}

/**
 * https://stackoverflow.com/a/25867068
 * @param {number} degree
 * @return {string}
 */
export function degreeToCompass(degree) {
  const val = Math.floor(degree / 22.5 + 0.5);
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return arr[val % 16];
}

/**
 * @param {number|undefined|null} val
 * @return {string}
 */
export function toLocaleString(val) {
  if (typeof val === 'number') {
    return val.toLocaleString();
  }
  return '';
}

/**
 * @return {void}
 */
export function noop() {
  //
}
