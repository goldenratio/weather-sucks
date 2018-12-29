import { html, Component, render } from './libs/preact.js';
import {
  Background,
  CityHeader,
  DoesItSuck,
  SettingsIcon,
  ForecastInfo,
  Temperature
} from './components/weather.js';
import { SettingsPanel } from './components/settings-panel.js';
import { convertKelvinTo } from './modules/utils.js';
import { fetchWeatherInfo } from './modules/service.js';
import { autoUpdate } from './modules/auto-update.js';
import { initServiceWorkers } from './modules/sw-utils.js';
import { AdditionalInfo } from './components/additional-info.js';

/** @type {StorageKey} **/
const storageKey = {
  CITY: 'weather-sucks.city',
  UNIT: 'weather-sucks.unit'
};

/**
 * @extends {Component<AppProps, AppState>}
 */
class App extends Component {

  componentDidMount() {
    const urlParam = new URLSearchParams(location.search);
    const city = urlParam.get('city') || localStorage.getItem(storageKey.CITY) || 'London';
    const unit = (urlParam.get('unit') || localStorage.getItem(storageKey.UNIT) || 'C').toUpperCase();

    this.setState({
      city,
      unit,
      temperature: undefined,
      forecast: undefined,
      showSettingsPanel: false,
      doesItSuck: false
    });

    this.autoUpdateUnsub = autoUpdate(() => {
      this.updateWeather();
    });
    this.updateWeather();
  }

  componentWillUnmount() {
    if (this.autoUpdateUnsub) {
      this.autoUpdateUnsub();
    }
  }

  /**
   * @param {AppProps} prop
   * @param {AppState} state
   */
  render({}, { showSettingsPanel, city, doesItSuck, temperature, unit, forecast }) {
    if (showSettingsPanel === undefined) {
      return html``;
    }

    const blurClass = showSettingsPanel ? 'blur' : 'no-blur';

    return html`
      <div class="app">
        ${!showSettingsPanel ?
          html`` :
          html`<${SettingsPanel} city="${city}" unit="${unit}" 
              onCloseClick=${() => this.closeSettingsPanel()} 
              onSaveClick=${(/** @type {string}**/city, /** @type {Unit}**/unit) => this.saveSettings(city, unit)} />`
        }
        <${Background} forecast="${forecast}" />
        <div class=${`weather-container ${blurClass}`}>
          <div style="padding: 1.4em;">
            <${SettingsIcon} onClick="${() => this.openSettingsPanel()}" /> 
            <${CityHeader} city="${city}" />
            <${Temperature} value="${temperature}" unit="${unit}" />
            <${ForecastInfo} forecast="${forecast}" />
          </div>
        </div>
        <${DoesItSuck} value=${doesItSuck} blur=${showSettingsPanel} />
        <${AdditionalInfo} />
      </div>
    `;
  }

  openSettingsPanel() {
    this.setState({ showSettingsPanel: true });
  }

  closeSettingsPanel() {
    this.setState({ showSettingsPanel: false });
  }

  /**
   * @param {string} city
   * @param {Unit} unit
   */
  saveSettings(city, unit) {
    if (city) {
      localStorage.setItem(storageKey.CITY, city);
      this.setState({
        city
      });
    }

    if (unit && (unit === 'C' || unit === 'F')) {
      localStorage.setItem(storageKey.UNIT, unit);
      this.setState({
        unit
      });
    }

    this.closeSettingsPanel();
    history.pushState({}, '', './');

    this.updateWeather();
  }

  updateWeather() {
    const { city, unit } = this.state;
    fetchWeatherInfo(city)
      .then(/** @type {WeatherInfo} **/data => {
        const { temperature, forecast, city, country } = data;
        this.setState({
          temperature: convertKelvinTo(temperature, unit),
          forecast,
          city: `${city}, ${country}`,
          doesItSuck: true
        });
      })
      .catch(/** @type {number} **/errCode => {
        console.log('error: ', errCode);
        this.setState({
          temperature: undefined,
          forecast: undefined
        });

        if (errCode === 404) {
          alert('Invalid City Name');
        }
        this.openSettingsPanel();
      });
  }
}

window.onload = () => {
  console.log('Created by: @karthikvj https://twitter.com/karthikvj');
  console.log('Source: https://github.com/goldenratio/weather-sucks');

  initServiceWorkers(() => {
    console.log('new version available');
    window.location.reload();
  });
  render(html`<${App} />`, document.body);
};
