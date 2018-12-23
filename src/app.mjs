import { html, Component, render } from './libs/preact.mjs';
import { Background, CityHeader, DoesItSuck, SettingsIcon, ForecastInfo, Temperature } from './components/weather.component.mjs';
import { SettingsPanel } from './components/settings-panel.component.mjs';
import { convertKelvinTo } from './utils.mjs';

export const weatherApiUrl = (city, country) => {
  const q = country ? `${city},${country}` : `${city}`;
  return `https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=1589940d6e6075602eefa336163efef3`;
};

class App extends Component {

  componentDidMount() {
    this.setState({
      city: localStorage.getItem('weather-sucks.city') || 'London',
      country: '',
      temperature: undefined,
      unit: localStorage.getItem('weather-sucks.unit') || 'C',
      forecast: undefined,
      showSettingsPanel: false,
      doesItSuck: true
    });

    this.updateWeather();
  }

  render({}, { showSettingsPanel, city, doesItSuck, temperature, unit, forecast }) {
    if (showSettingsPanel === undefined) {
      return html``;
    }
    return html`
      <div class="app">
        <${Background} forecast="${forecast}" />
        ${
          !showSettingsPanel ? 
            html`` : 
            html`<${SettingsPanel} onCloseClick=${() => this.closeSettingsPanel()} onSaveClick=${(unit, city) => this.saveSettings(unit, city)} />`
        }
        <div class="weather-container">
          <${SettingsIcon} onClick="${() => this.openSettingsPanel()}" /> 
          <${CityHeader} value="${city}" />
          <${Temperature} value="${temperature}" unit="${unit}" />
          <${ForecastInfo} description="${forecast}" />
        </div>
        <${DoesItSuck} value=${doesItSuck} />
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
      localStorage.setItem('weather-sucks.city', city);
      this.setState({
        city
      });
    }

    if (unit && (unit === 'C' || unit === 'F')) {
      localStorage.setItem('weather-sucks.unit', unit);
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
        const { cod } = json;
        if (cod === 200) {
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
          throw Error(cod);
        }

      })
      .catch(err => {
        console.error('Error: ', err);
        this.openSettingsPanel();
      });
  }
}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
