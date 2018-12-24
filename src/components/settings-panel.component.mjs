import { html, Component } from '../libs/preact.mjs';

export class SettingsPanel extends Component {

  render({ onCloseClick, onSaveClick }) {
    return html`
      <div class="settings-panel" onclick="${() => onCloseClick()}">
        <div onclick="${event => event.stopPropagation() }">
        
        Unit: 
        <select id="settings-dropdown">
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select> 
        <input type="text" placeholder="City" />
        <input type="button" value="Save" onclick="${() => console.log(this)}" />
        </div>
      </div>
    `;
  }

}
