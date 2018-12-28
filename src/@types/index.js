/**
 * @typedef {('C' | 'F')} Unit
 */

/**
 * @typedef {('rain' | 'drizzle' | 'snow' | 'sleet' | 'clear-day' | 'clear-night' | 'mist' | 'clouds' | 'default')} BackgroundType
 */

/**
 * @typedef {Readonly<object>} StorageKey
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

/**
 * @typedef {object} AppProps
 */

/**
 * @typedef {object} AppState
 * @property {string} city
 * @property {Unit} unit
 * @property {number} [temperature]
 * @property {string} [forecast]
 * @property {boolean} showSettingsPanel
 * @property {boolean} doesItSuck
 */
