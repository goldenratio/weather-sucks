import { html } from '../libs/preact.mjs';
import { getWeatherIconContent } from '../utls.mjs';

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
      <div class="weather-digit">${value}<sup><span class="sup">° ${unit}</span></sup></div>
      <div class="icon"><div class="${icon}">${getWeatherIconContent()}</div></div>
    </div>
  `;
};

export const Background = () => html`<div class="background"></div>`;

/**
 * @param {boolean} value
 */
export const DoesItSuck = ({ value }) => html`<h1 class="does-it-suck">${value ? "Yes, It Sucks!" : "No, It is fine"}</h1>`;


export const SettingsIcon = ({ onClick }) => {
  return html`
    <div onclick="${() => onClick()}">
      <svg class="settings-icon" height="48" width="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97l-.75-5.3c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97l-4.98-2.01c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31c-.08.64-.14 1.29-.14 1.95s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zm-14.86 5.05c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
    </div>
  `;
}
