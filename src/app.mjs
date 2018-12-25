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
    const unit = (urlParam.get('unit') || localStorage.getItem(storageKey.UNIT) || 'C').toUpperCase();

    this.setState({
      city,
      unit,
      country: '',
      temperature: undefined,
      forecast: undefined,
      showSettingsPanel: false,
      doesItSuck: true
    });

    /** @type {number|undefined} **/
    this.lastUpdated = undefined;

    window.addEventListener('focus', () => {
      if (this.lastUpdated === undefined) {
        return;
      }
      const timeDiff = Date.now() - this.lastUpdated;
      // 120000 = 2 minutes
      if (timeDiff > 120000) {
        this.updateWeather();
      }
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
            html`<${SettingsPanel} unit="${unit}" city="${city}" onCloseClick=${() => this.closeSettingsPanel()} onSaveClick=${(unit, city) => this.saveSettings(unit, city)} />`
        }
        <${Background} forecast="${forecast}" />
        <div class=${`weather-container ${blurClass}`}>
          <div style="padding: 1.4em;">
            <${SettingsIcon} onClick="${() => this.openSettingsPanel()}" /> 
            <${CityHeader} city="${city}" country="${country}" />
            <${Temperature} value="${temperature}" unit="${unit}" />
            <${ForecastInfo} description="${forecast}" />
          </div>
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
      .then(/** @type {WeatherInfo} **/ data => {
        const { temperature, forecast, city, country } = data;
        this.setState({
          temperature: convertKelvinTo(temperature, unit),
          forecast,
          city,
          country
        });
        this.lastUpdated = Date.now();
      })
      .catch(/** @type {number} **/ errCode => {
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
  render(html`<${App} />`, document.body);
};
