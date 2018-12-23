import { html } from '../libs/preact.mjs';

export const SettingsPanel = ({ show, onCloseClick }) => {
  const content = !show ?
    html`` :
    html`
      <div class="settings-panel" onclick="${() => onCloseClick()}">
  
      </div>
    `;

  return content;
};
