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
 * @property {number} [temperature] in Kelvin
 * @property {string} [forecast]
 * @property {string} [country]
 * @property {string} [city]
 */
