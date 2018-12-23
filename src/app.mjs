import { html, Component, render } from './libs/preact.mjs';
import { Background, CityHeader, DoesItSuck, SettingsIcon, Temperature } from './components/weather.component.mjs';

class App extends Component {

  render() {
    return html`
      <div class="app">
        <${Background} />
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
    console.log('open settings panel');
  }
}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
