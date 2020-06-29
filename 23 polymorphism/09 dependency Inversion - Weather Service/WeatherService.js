import { resolve } from 'url';

const apiUrl = 'http://localhost:8080/api/v2/';

// BEGIN (write your solution here)
class WeatherService {
  constructor(client) {
    this.client = client;
  }

  async getTemperature(city) {
    try {
      const responce = await this.client.get(city, {
        baseUrl: apiUrl
      });
      console.log(`########### ${responce} ############`);
      return responce;
    } catch (err) {
      console.log(`########### ${err} ############`);
      throw err;
    }
  }
}

export default WeatherService;
// END

// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

/* test http request */
