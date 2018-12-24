import { toInt } from './utils.mjs';

/**
 * @param {string} city
 * @param {string|undefined} [country='']
 * @returns {string}
 */
const weatherApiUrl = (city, country = '') => {
  const q = country ? `${city},${country}` : `${city}`;
  return `https://api.openweathermap.org/data/2.5/weather?q=${q}&lang=en&APPID=1589940d6e6075602eefa336163efef3`;
};

/**
 *
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
          const { main, weather, sys, name } = json;
          resolve(/** @type {WeatherInfo} **/ {
            temperature: main ? main.temp : undefined,
            forecast: (weather && weather.length > 0) ? weather[0].description : undefined,
            country: sys ? sys.country : undefined,
            city: name
          });
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