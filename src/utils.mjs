/**
 * @param {string} forecast
 * @returns {string}
 */
export function getForecastIcon(forecast) {
  const key = forecast.toLowerCase();

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

  if (key.indexOf('mist') >= 0 || key.indexOf('dust') >= 0 || key.indexOf('haze') >= 0) {
    return '';
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

  if (key.indexOf('mist') >= 0 || key.indexOf('haze') >= 0 || key.indexOf('smoke') >= 0) {
    return 'mist';
  }

  if (key.indexOf('cloud') >= 0) {
    return 'clouds';
  }

  if (key.indexOf('rain') >= 0) {
    return 'rain';
  }

  if (key.indexOf('snow') >= 0) {
    return 'snow';
  }

  if (key.indexOf('clear') >= 0) {
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