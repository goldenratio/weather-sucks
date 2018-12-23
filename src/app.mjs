import { html, Component, render } from './libs/preact.mjs';
import { Background, CityHeader, DoesItSuck, SettingsIcon, Temperature } from './components/weather.component.mjs';
import { SettingsPanel } from './components/settings-panel.component.mjs';

class App extends Component {

  render({ }, { showSettingsPanel = false }) {
    return html`
      <div class="app">
        <${Background} />
        <${SettingsPanel} show=${showSettingsPanel} onCloseClick=${() => this.closeSettingsPanel()} />
        <div class="weather-container">
          <${SettingsIcon} onClick="${() => this.openSettingsPanel()}" /> 
          <${CityHeader} value="Tallinn" />
          <${Temperature} value="-10" unit="C" icon="SUNSHINE" />
        </div>
        <${DoesItSuck} value=${true} />
      </div>
    `;
  }

  openSettingsPanel() {
    this.setState({ showSettingsPanel: true });
  }

  closeSettingsPanel() {
    this.setState({ showSettingsPanel: false });
  }
}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
