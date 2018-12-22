import { html, Component, render } from './libs/preact.mjs';
import { CityHeader, Temperature } from './components/weather.component.mjs';

class App extends Component {

  render() {
    return html`
      <div class="app">
        <button onClick=${() => this.changeCity()}>settings</button>
        <${CityHeader} value="Tallinn" /> 
        <${Temperature} value="-10" unit="C" icon="SUNSHINE" /> 
      </div>
    `;
  }

  changeCity() {
    console.log('prompt change city');
  }
}

render(html`<${App} />`, document.body);
