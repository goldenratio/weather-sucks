/**
 * @param {string} forecast
 * @returns {string}
 */
export function getForecastIcon(forecast) {
  const hours = new Date().getHours();
  const isDay = hours > 6 && hours < 18;
  const key = forecast.toLowerCase();

  if (key.indexOf('clear') >= 0) {
    return isDay ? '' : '';
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
 * @param {number} kelvin
 * @param {Unit} unit
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
    return Math.round((kelvin - 273.15) * (9/5) + 32);
  }
  return undefined;
}