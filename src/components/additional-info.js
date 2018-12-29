import { html } from '../libs/preact.js';
import { degreeToCompass } from '../modules/utils.js';

/**
 * @param {AdditionalInfoProps} props
 */
export const AdditionalInfoPanel = ({ show, data }) => {
  if (show === undefined || data === undefined) {
    return html``;
  }
  const showClass = show ? 'additional-info-show' : 'additional-info-hide';
  const { humidity, pressure, windSpeed, windDirection, visibility } = data;

  return html`
    <div class=${`additional-info ${showClass}`}>
      <div style="padding: 1em;">
        <div>Humidity: ${humidity}%</div>
        <div>Pressure: ${pressure.toLocaleString()} mBar</div>
        <div>Wind Speed: ${windSpeed} m/s</div>
        <div>Wind Direction: ${windDirection}° (${degreeToCompass(windDirection)})</div>
        <div>Visibility: ${Math.floor(visibility / 1000)} km</div>
      </div>
    </div>
  `;
};