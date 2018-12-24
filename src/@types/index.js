/**
 * @typedef {('C' || 'F')} Unit
 */

/**
 * @typedef {('rain' || 'snow' || 'clear-day' || 'clear-night' || 'mist' || 'clouds' || 'default')} BackgroundType
 */

/**
 * @typedef {Readonly<object<string, string>>} StorageKey
 * @property {string} CITY
 * @property {string} UNIT
 */

/**
 * @typedef {Readonly<object>} WeatherInfo
 * @property {number|undefined} temperature in Kelvin
 * @property {string|undefined} forecast
 */
