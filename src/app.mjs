import { html, Component, render } from './libs/preact.mjs';
import { CityHeader, doesItSuck, Temperature } from './components/weather.component.mjs';

class App extends Component {

  render() {
    return html`
      <div class="app">
        <${CityHeader} value="Tallinn" />
        <${Temperature} value="-10" unit="C" icon="SUNSHINE" />
        <${doesItSuck} value=${true} />
      </div>
    `;
  }

}

window.onload = () => {
  render(html`<${App} />`, document.body);
};
