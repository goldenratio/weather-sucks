import { html, Component } from '../libs/preact.mjs';

const ENTER = 13;
const ESC = 27;

export class SettingsPanel extends Component {

  componentDidMount() {
    const { city, unit } = this.props;
    this.setState({
      city,
      unit
    });

    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyUp(event) {
    const { keyCode } = event;
    const { onCloseClick, onSaveClick } = this.props;

    if (keyCode === ESC) {
      onCloseClick();
    } else if(keyCode === ENTER) {
      const { city, unit } = this.state;
      onSaveClick(city.trim(), unit);
    }
  }

  render({ onCloseClick, onSaveClick }, { city, unit }) {
    return html`
      <div class="settings-panel" onclick="${() => onCloseClick()}">
        <div class="settings-panel-content" onclick="${event => event.stopPropagation() }">
                
          <div>
            <input id="c" name="unit" type="radio" value="C" checked=${ unit === 'C' } onchange="${ e => this.setState({ unit: e.target.value }) }" />
            <label for="c" style="padding-right: 1em;">° C</label>   
            <input id="f" name="unit" type="radio" value="F" checked=${ unit === 'F' } onchange="${ e => this.setState({ unit: e.target.value }) }" />
            <label for="f">° F</label>        
          </div>
          
          <div>
            <input type="text" list="cities" placeholder="City" value="${city}" oninput="${e => this.setState({ city: e.target.value })}" />
            <datalist id="cities">
              <option value="Sukhumi" />
              <option value="Kabul" />
              <option value="Episkopi Cantonment" />
              <option value="Tirana" />
              <option value="Algiers, US" />
              <option value="Pago Pago" />
              <option value="Andorra la Vella" />
              <option value="Luanda" />
              <option value="The Valley" />
              <option value="St. John's" />
              <option value="Buenos Aires" />
              <option value="Yerevan" />
              <option value="Oranjestad" />
              <option value="Georgetown" />
              <option value="Canberra" />
              <option value="Vienna" />
              <option value="Baku" />
              <option value="Nassau" />
              <option value="Manama" />
              <option value="Dhaka" />
              <option value="Bridgetown" />
              <option value="Minsk" />
              <option value="Brussels" />
              <option value="Belmopan" />
              <option value="Porto-Novo" />
              <option value="Hamilton" />
              <option value="Thimphu" />
              <option value="Sucre" />
              <option value="La Paz" />
              <option value="Sarajevo" />
              <option value="Gaborone" />
              <option value="Brasília" />
              <option value="Road Town" />
              <option value="Bandar Seri Begawan" />
              <option value="Sofia" />
              <option value="Ouagadougou" />
              <option value="Bujumbura" />
              <option value="Phnom Penh" />
              <option value="Yaoundé" />
              <option value="Ottawa" />
              <option value="Praia" />
              <option value="George Town" />
              <option value="Bangui" />
              <option value="N'Djamena" />
              <option value="Santiago" />
              <option value="Beijing" />
              <option value="Flying Fish Cove" />
              <option value="West Island" />
              <option value="Bogotá" />
              <option value="Moroni" />
              <option value="Avarua" />
              <option value="San José" />
              <option value="Zagreb" />
              <option value="Havana" />
              <option value="Willemstad" />
              <option value="Nicosia" />
              <option value="Prague" />
              <option value="Yamoussoukro" />
              <option value="Kinshasa" />
              <option value="Copenhagen" />
              <option value="Djibouti" />
              <option value="Roseau" />
              <option value="Santo Domingo" />
              <option value="Dili" />
              <option value="Hanga Roa" />
              <option value="Quito" />
              <option value="Cairo" />
              <option value="San Salvador" />
              <option value="Malabo" />
              <option value="Asmara" />
              <option value="Tallinn" />
              <option value="Addis Ababa" />
              <option value="Stanley" />
              <option value="Tórshavn" />
              <option value="Palikir" />
              <option value="Suva" />
              <option value="Helsinki" />
              <option value="Paris" />
              <option value="Cayenne" />
              <option value="Papeete" />
              <option value="Libreville" />
              <option value="Banjul" />
              <option value="Tbilisi" />
              <option value="Berlin" />
              <option value="Accra" />
              <option value="Gibraltar" />
              <option value="Athens" />
              <option value="Nuuk" />
              <option value="St. George's" />
              <option value="Hagåtña" />
              <option value="Guatemala City" />
              <option value="St. Peter Port" />
              <option value="Conakry" />
              <option value="Bissau" />
              <option value="Georgetown" />
              <option value="Port-au-Prince" />
              <option value="Tegucigalpa" />
              <option value="Budapest" />
              <option value="Reykjavík" />
              <option value="New Delhi" />
              <option value="Jakarta" />
              <option value="Tehran" />
              <option value="Baghdad" />
              <option value="Dublin" />
              <option value="Douglas" />
              <option value="Jerusalem" />
              <option value="Rome" />
              <option value="Kingston" />
              <option value="Tokyo" />
              <option value="St. Helier" />
              <option value="Amman" />
              <option value="Astana" />
              <option value="Nairobi" />
              <option value="Tarawa" />
              <option value="Pristina" />
              <option value="Kuwait City" />
              <option value="Bishkek" />
              <option value="Vientiane" />
              <option value="Riga" />
              <option value="Beirut" />
              <option value="Maseru" />
              <option value="Monrovia" />
              <option value="Tripoli" />
              <option value="Vaduz" />
              <option value="Vilnius" />
              <option value="Luxembourg" />
              <option value="Skopje" />
              <option value="Antananarivo" />
              <option value="Lilongwe" />
              <option value="Kuala Lumpur" />
              <option value="Malé" />
              <option value="Bamako" />
              <option value="Valletta" />
              <option value="Majuro" />
              <option value="Nouakchott" />
              <option value="Port Louis" />
              <option value="Mexico City" />
              <option value="Chisinau" />
              <option value="Monaco" />
              <option value="Ulaanbaatar" />
              <option value="Podgorica" />
              <option value="Plymouth" />
              <option value="Rabat" />
              <option value="Maputo" />
              <option value="Naypyidaw" />
              <option value="Stepanakert" />
              <option value="Windhoek" />
              <option value="Yaren" />
              <option value="Kathmandu" />
              <option value="Amsterdam" />
              <option value="Nouméa" />
              <option value="Wellington" />
              <option value="Managua" />
              <option value="Niamey" />
              <option value="Abuja" />
              <option value="Alofi" />
              <option value="Kingston" />
              <option value="Pyongyang" />
              <option value="Nicosia" />
              <option value="Belfast" />
              <option value="Saipan" />
              <option value="Oslo" />
              <option value="Muscat" />
              <option value="Islamabad" />
              <option value="Ngerulmud" />
              <option value="Jerusalem" />
              <option value="Panama City" />
              <option value="Port Moresby" />
              <option value="Asunción" />
              <option value="Lima" />
              <option value="Manila" />
              <option value="Adamstown" />
              <option value="Warsaw" />
              <option value="Lisbon" />
              <option value="San Juan" />
              <option value="Doha" />
              <option value="Taipei" />
              <option value="Brazzaville" />
              <option value="Bucharest" />
              <option value="Moscow" />
              <option value="Kigali" />
              <option value="Gustavia" />
              <option value="Jamestown" />
              <option value="Basseterre" />
              <option value="Castries" />
              <option value="Marigot" />
              <option value="St. Pierre" />
              <option value="Kingstown" />
              <option value="Apia" />
              <option value="San Marino" />
              <option value="Riyadh" />
              <option value="Edinburgh" />
              <option value="Dakar" />
              <option value="Belgrade" />
              <option value="Victoria" />
              <option value="Freetown" />
              <option value="Singapore" />
              <option value="Philipsburg" />
              <option value="Bratislava" />
              <option value="Ljubljana" />
              <option value="Honiara" />
              <option value="Mogadishu" />
              <option value="Hargeisa" />
              <option value="Pretoria" />
              <option value="Grytviken" />
              <option value="Seoul" />
              <option value="Tskhinvali" />
              <option value="Juba" />
              <option value="Madrid" />
              <option value="Sri Jayawardenapura Kotte" />
              <option value="Khartoum" />
              <option value="Paramaribo" />
              <option value="Mbabane" />
              <option value="Stockholm" />
              <option value="Bern" />
              <option value="Damascus" />
              <option value="São Tomé" />
              <option value="Dushanbe" />
              <option value="Dodoma" />
              <option value="Bangkok" />
              <option value="Lomé" />
              <option value="Nukuʻalofa" />
              <option value="Tiraspol" />
              <option value="Port of Spain" />
              <option value="Edinburgh of the Seven Seas" />
              <option value="Tunis" />
              <option value="Ankara" />
              <option value="Ashgabat" />
              <option value="Cockburn Town" />
              <option value="Funafuti" />
              <option value="Kampala" />
              <option value="Kiev" />
              <option value="Abu Dhabi" />
              <option value="London" />
              <option value="Washington, D.C." />
              <option value="Charlotte Amalie" />
              <option value="Montevideo" />
              <option value="Tashkent" />
              <option value="Port Vila" />
              <option value="Vatican City" />
              <option value="Caracas" />
              <option value="Hanoi" />
              <option value="Cardiff" />
              <option value="Mata-Utu" />
              <option value="El Aaiún" />
              <option value="Sanaá" />
              <option value="Lusaka" />
              <option value="Harare" />
              <option value="Vancouver, CA" />
              <option value="Vancouver, US" />
            </datalist>
          </div>
          
          <div>
            <input type="button" value="Save" onclick="${() => onSaveClick(city.trim(), unit)}" />
          </div>
        
        </div>
        
      </div>
    `;
  }

}
