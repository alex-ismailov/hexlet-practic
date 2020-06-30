import { resolve } from 'url';

const apiUrl = 'http://localhost:8080/api/v2/';

// BEGIN (write your solution here)
class WeatherService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getTemperature(city) {
    const reqUrl = resolve(apiUrl, `cities/${city}`);
    const responce = await this.httpClient.get(reqUrl);
    const data = JSON.parse(responce.data);
    return data.temperature;
  }
}

export default WeatherService;
// END
