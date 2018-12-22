import { html } from '../libs/preact.mjs';

/**
 * @param {string} value
 */
export const CityHeader = ({ value }) => html`<div class="city-title">${value}</div>`;

/**
 * @param {string} value
 * @param {string} unit
 * @param {ICON_TYPE} icon
 */
export const Temperature = ({ value, unit, icon }) => {
  return html`
    <div class="temperature">
      <div class="icon__${icon}"></div>
      <div>${value}<sup>°</sup> ${unit}</div>
    </div>
  `;
};

/**
 * @param {boolean} value
 */
export const doesItSuck = ({ value }) => html`<h1 class="does-it-suck">${value ? "Yes, It Sucks!" : "No, It is fine"}</h1>`;
