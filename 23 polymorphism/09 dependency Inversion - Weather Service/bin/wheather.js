/* eslint no-console: 0 */

import axios from 'axios';
import WeatherService from '../WeatherService.js';

// BEGIN (write your solution here)
const city = process.argv[2];
const client = axios;

const weatherService = new WeatherService(client);

const temperature = weatherService.getTemperature(city);
console.log(`Temperature in ${city}: ${temperature}C`);

console.log(res);
// END

// const res = 'http://localhost:8080/api/v2/'
//   .split('/')
//   .filter((part) => part !== '');

// const [protocol, host] = res;
// console.log(protocol);
// console.log(host);


// import { resolve } from 'url';

// const apiUrl = 'http://localhost:8080/api/v2/';
// const city = 'berlin';
// const request = resolve(apiUrl, city);
// console.log(request);
