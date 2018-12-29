/**
 * @typedef {('C' | 'F')} Unit
 */

/**
 * @typedef {('rain' | 'drizzle' | 'snow' | 'sleet' | 'clear-day' | 'clear-night' | 'mist' | 'clouds' | 'default')} BackgroundType
 */

/**
 * @typedef {object} StorageKey
 * @property {string} CITY
 * @property {string} UNIT
 */

/**
 * @typedef {object} WeatherInfo
 * @property {number} [temperature] in Kelvin
 * @property {string} [forecast]
 * @property {string} [country]
 * @property {string} [city]
 * @property {number} [humidity]
 * @property {number} [pressure]
 * @property {number} [windSpeed] m/s
 * @property {number} [windDirection] degrees
 */

/**
 * @typedef {function} Callback
 * @function
 * @return {void}
 */

/**
 * @typedef {function} DisposeCallback
 * @function
 * @return {void}
 */

/**
 * @typedef {object} AppProps
 */

/**
 * @typedef {object} AppState
 * @property {string} [city]
 * @property {Unit} [unit]
 * @property {number|undefined} [temperature]
 * @property {string|undefined} [forecast]
 * @property {boolean} [showSettingsPanel]
 * @property {boolean} [showAdditionalInfo]
 * @property {AdditionalInfo|undefined} [additionalInfo]
 * @property {boolean} [doesItSuck]
 */

/**
 * @typedef {object} AdditionalInfo
 * @property {number} humidity
 * @property {number} pressure
 * @property {number} windSpeed
 * @property {number} windDirection
 */