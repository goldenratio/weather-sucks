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
      city: 'Tartu',
      country: '',
      temperature: undefined,
      unit: 'C',
      forecast: undefined,
      showSettingsPanel: false,
      doesItSuck: true
    });

    this.updateWeather();
  }

  render({}, { showSettingsPanel, city, doesItSuck, temperature, unit, forecast }) {
    return html`
      <div class="app">
        <${Background} />
        <${SettingsPanel} show=${showSettingsPanel} onCloseClick=${() => this.closeSettingsPanel()} />
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

  updateWeather() {
    const { city, country, unit } = this.state;
    const url = weatherApiUrl(city, country);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        const { cod, main, weather } = json;

        if (cod === '404') {
          console.log('error');
          return;
        }

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
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  }
}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
