import { toInt } from './utils.js';

/**
 * @param {string} city
 * @returns {string}
 */
const weatherApiUrl = city => `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&APPID=1589940d6e6075602eefa336163efef3`;

/**
 * @param {string} city
 * @returns {Promise<WeatherInfo>}
 */
export function fetchWeatherInfo(city) {
  return new Promise((resolve, reject) => {
    const url = weatherApiUrl(city);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        // console.log(json);
        const { /** @type {number|string} **/ cod } = json;
        const code = toInt(cod);
        if (code === 200) {
          const { main, weather, sys, name, wind, visibility } = json;
          /** @type {WeatherInfo} **/
          const info = {
            temperature: main ? main.temp : undefined,
            forecast: (weather && weather.length > 0) ? weather[0].description : undefined,
            country: sys ? sys.country : undefined,
            city: name,
            humidity: main ? main.humidity : undefined,
            pressure: main ? main.pressure : undefined,
            windSpeed: wind ? wind.speed : undefined,
            windDirection: wind ? wind.deg : undefined,
            visibility
          };
          resolve(info);
        } else {
          throw Error(code.toString());
        }
      })
      .catch(err => {
        const { /** @type {string} **/ message } = err;
        const code = toInt(message);
        reject(code);
      });

  });
}
