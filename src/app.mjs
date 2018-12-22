import { html, Component, render } from './libs/preact.mjs';
import { Background, CityHeader, doesItSuck, Temperature } from './components/weather.component.mjs';

class App extends Component {

  render() {
    return html`
      <div class="app">
        <${Background} />
        <div class="weather-container">
          <${CityHeader} value="Tallinn" />
          <${Temperature} value="-10" unit="C" icon="SUNSHINE" />
        </div>
        <${doesItSuck} value=${true} />
      </div>
    `;
  }

}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
