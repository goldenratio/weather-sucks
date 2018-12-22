import { html } from '../libs/preact.mjs';

export const CityHeader = ({ value }) => html`<h1>${value}</h1>`;

export const Temperature = ({ value, unit, icon }) => {
  return html`
    <div>
      <div class="icon__${icon}"></div>
      <div>${value}<sup>°</sup> ${unit}</div>
    </div>
  `;
};
