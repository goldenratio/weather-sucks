import { html, Component, render } from './libs/preact.mjs';
import { Background, CityHeader, DoesItSuck, SettingsIcon, ForecastInfo, Temperature } from './components/weather.component.mjs';
import { SettingsPanel } from './components/settings-panel.component.mjs';
import { convertKelvinTo, toInt } from './utils.mjs';

/**
 * @param {string} city
 * @param {string} country
 * @returns {string}
 */
const weatherApiUrl = (city, country) => {
  const q = country ? `${city},${country}` : `${city}`;
  return `https://api.openweathermap.org/data/2.5/weather?q=${q}&lang=en&APPID=1589940d6e6075602eefa336163efef3`;
};

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
    const url = weatherApiUrl(city, country);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        const { /** @type {number|string} **/ cod } = json;
        const code = toInt(cod);
        if (code === 200) {
          const { main, weather } = json;
          if (typeof main !== 'undefined') {
            this.setState({
              temperature: convertKelvinTo(main.temp, unit),
            });
          }

          if (typeof weather !== 'undefined' && weather.length > 0) {
            this.setState({
              forecast: weather[0].description || undefined,
            });
          }
        } else {
          throw Error(code.toString());
        }

      })
      .catch(err => {
        const { /** @type {string} **/ message } = err;
        const code = toInt(message);
        if (code === 500) {
          // retry
          setTimeout(() => {
            this.updateWeather();
          }, 2000);
        } else if (code === 404) {
          // city not found
          console.log('city not found');
          this.openSettingsPanel();
        } else {
          console.log('unknown error, code: ' + code);
        }
      });
  }
}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
