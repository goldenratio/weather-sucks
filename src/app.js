import { html, Component, render } from './libs/preact.js';
import {
  Background,
  CityHeader,
  DoesItSuck,
  SettingsIcon,
  ForecastInfo,
  Temperature,
  LoadingScreen
} from './components/weather.js';
import { SettingsPanel } from './components/settings-panel.js';
import { convertKelvinTo, toUnit } from './modules/utils.js';
import { fetchWeatherInfo } from './modules/service.js';
import { autoUpdate } from './modules/auto-update.js';
import { initServiceWorkers } from './modules/sw-utils.js';
import { AdditionalInfoPanel } from './components/additional-info.js';

/** @type {StorageKey} **/
const storageKey = {
  CITY: 'weather-sucks.city',
  UNIT: 'weather-sucks.unit'
};

const defaultCity = 'Tallinn, EE';

/**
 * @extends {Component<AppProps, AppState>}
 */
class App extends Component {

  componentDidMount() {
    const urlParam = typeof URLSearchParams !== 'undefined' ? new URLSearchParams(location.search) : undefined;
    const city = (urlParam && urlParam.get('city')) || localStorage.getItem(storageKey.CITY) || defaultCity;
    const unit = toUnit((urlParam && urlParam.get('unit')) || localStorage.getItem(storageKey.UNIT));

    /** @type {AppState} **/
    const data = {
      city,
      unit,
      temperature: undefined,
      forecast: undefined,
      showSettingsPanel: false,
      showAdditionalInfo: false,
      additionalInfo: undefined,
      doesItSuck: false
    };
    this.setState(data);

    autoUpdate(() => {
      this.updateWeather();
    });
    this.updateWeather();
  }

  /**
   * @param {AppProps} prop
   * @param {AppState} state
   */
  render({}, { showSettingsPanel, showAdditionalInfo, additionalInfo, city, doesItSuck, temperature, unit, forecast }) {
    /** @type {boolean} **/
    const weatherLoaded = typeof temperature !== 'undefined';

    const blurClass = showSettingsPanel ? 'blur' : 'no-blur';
    return html`
      <div class="app" onClick="${() => {
      this.toggleAdditionalInfo()
    }}">
        ${!showSettingsPanel ?
      html`` :
      html`<${SettingsPanel} city="${city}" unit="${unit}" 
              onCloseClick=${() => this.closeSettingsPanel()} 
              onSaveClick=${(/** @type {string}**/city, /** @type {Unit}**/unit) => this.saveSettings(city, unit)} />`
      }
        ${weatherLoaded ?
      html`` :
      html`<${LoadingScreen} />`
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
        <${AdditionalInfoPanel} show=${showAdditionalInfo} data=${additionalInfo} />
      </div>
    `;
  }

  openSettingsPanel() {
    this.setState({
      showSettingsPanel: true,
      showAdditionalInfo: false
    });
  }

  closeSettingsPanel() {
    this.setState({ showSettingsPanel: false });
  }

  toggleAdditionalInfo() {
    const { showAdditionalInfo, showSettingsPanel } = this.state;
    if (showSettingsPanel) {
      return;
    }
    this.setState({ showAdditionalInfo: !showAdditionalInfo });
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
        const { temperature, forecast, city, country, humidity, pressure, windSpeed, windDirection, visibility } = data;
        /** @type {AdditionalInfo} **/
        const additionalInfo = {
          humidity,
          pressure,
          windSpeed,
          windDirection,
          visibility
        };
        this.setState({
          temperature: convertKelvinTo(temperature, unit),
          forecast,
          city: `${city}, ${country}`,
          doesItSuck: true,
          showSettingsPanel: false,
          additionalInfo
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
  });
  render(html`<${App} />`, document.body);
};
