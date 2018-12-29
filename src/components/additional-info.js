import { html } from '../libs/preact.js';

/**
 * @param {AdditionalInfoProps} props
 */
export const AdditionalInfoPanel = ({ show, data }) => {
  if (show === undefined || data === undefined) {
    return html``;
  }
  const showClass = show ? 'additional-info-show' : 'additional-info-hide';
  const { humidity, pressure, windSpeed, windDirection } = data;

  return html`
    <div class=${`additional-info ${showClass}`}>
      <div style="padding: 1em;">
        <div>Humidity: ${humidity}%</div>
        <div>Pressure: ${pressure} hPa</div>
        <div>Wind Speed: ${windSpeed} m/s</div>
        <div>Wind Direction: ${windDirection}°</div>
      </div>
    </div>
  `;
};