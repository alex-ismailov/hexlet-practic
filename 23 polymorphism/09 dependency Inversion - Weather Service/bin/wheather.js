/* eslint no-console: 0 */

import axios from 'axios';
import WeatherService from '../WeatherService.js';

// BEGIN (write your solution here)
const city = process.argv[2];
const httpClient = axios;

const weatherService = new WeatherService(httpClient);

const temperature = weatherService.getTemperature(city);
temperature.then((data) => {
  console.log(`Temperature in ${city}: ${data}C`.trim());
});
// END
