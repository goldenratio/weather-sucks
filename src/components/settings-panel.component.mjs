import { html } from '../libs/preact.mjs';

export const SettingsPanel = ({ show, onCloseClick }) => {
  const content = !show ?
    html`` :
    html`
      <div class="settings-panel" onclick="${() => onCloseClick()}">
        <div onclick="${event => event.stopPropagation() }">
        
        Unit: 
        <select>
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select> 
        <input type="text" placeholder="City" />
        
        
        
        </div>
      </div>
    `;

  return content;
};
