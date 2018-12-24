import { html, Component, render } from './libs/preact.mjs';
import { Background, CityHeader, DoesItSuck, SettingsIcon, ForecastInfo, Temperature } from './components/weather.component.mjs';
import { SettingsPanel } from './components/settings-panel.component.mjs';
import { convertKelvinTo } from './utils.mjs';
import { fetchWeatherInfo } from './service.mjs';

/** @type {StorageKey} **/
const storageKey = {
  CITY: 'weather-sucks.city',
  UNIT: 'weather-sucks.unit'
};

class App extends Component {

  componentDidMount() {
    const urlParam = new URLSearchParams(location.search);
    const city = urlParam.get('city') || localStorage.getItem(storageKey.CITY) || 'London';
    const country = urlParam.get('country') || '';
    const unit = (urlParam.get('unit') || localStorage.getItem(storageKey.UNIT) || 'C').toUpperCase();

    this.setState({
      city,
      country,
      unit,
      temperature: undefined,
      forecast: undefined,
      showSettingsPanel: false,
      doesItSuck: true
    });

    this.updateWeather();
  }

  render({}, { showSettingsPanel, city, country, doesItSuck, temperature, unit, forecast }) {
    if (showSettingsPanel === undefined) {
      return html``;
    }

    const blurClass = showSettingsPanel ? 'blur' : '';

    return html`
      <div class="app">
        ${
          !showSettingsPanel ? 
            html`` : 
            html`<${SettingsPanel} onCloseClick=${() => this.closeSettingsPanel()} onSaveClick=${(unit, city) => this.saveSettings(unit, city)} />`
        }
        <${Background} forecast="${forecast}" blur=${showSettingsPanel} />
        <div class=${`weather-container ${blurClass}`}>
          <${SettingsIcon} onClick="${() => this.openSettingsPanel()}" /> 
          <${CityHeader} city="${city}" country="${country}" />
          <${Temperature} value="${temperature}" unit="${unit}" />
          <${ForecastInfo} description="${forecast}" />
        </div>
        <${DoesItSuck} value=${doesItSuck} blur=${showSettingsPanel} />
      </div>
    `;
  }

  openSettingsPanel() {
    this.setState({ showSettingsPanel: true });
  }

  closeSettingsPanel() {
    this.setState({ showSettingsPanel: false });
  }

  saveSettings(unit, city) {
    if (city && city.trim() !== '') {
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
    this.updateWeather();
  }

  updateWeather() {
    const { city, country, unit } = this.state;
    fetchWeatherInfo(city, country)
      .then(/** @type {WeatherInfo} **/ data => {
        const { temperature, forecast } = data;
        this.setState({
          temperature: convertKelvinTo(temperature, unit),
          forecast
        });
      })
      .catch(/** @type {number} **/ errCode => {
        console.log('error: ', errCode);
      });
  }
}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
