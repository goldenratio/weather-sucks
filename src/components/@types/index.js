/**
 * @typedef {function} CloseCallback
 * @function
 * @return {void}
 */

/**
 * @typedef {function} SaveClickCallback
 * @function
 * @param {string} city
 * @param {Unit} unit
 * @return {void}
 */

/**
 * @typedef {object} SettingsPanelProps
 * @property {CloseCallback} onCloseClick
 * @property {SaveClickCallback} onSaveClick
 * @property {string} city
 * @property {Unit} unit
 */

/**
 * @typedef {object} SettingsPanelState
 * @property {string} [city]
 * @property {Unit} [unit]
 */

/**
 * @typedef {object} AdditionalInfoProps
 * @property {boolean} show
 * @property {AdditionalInfo} data
 */
