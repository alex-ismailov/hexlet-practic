import { resolve } from 'url';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const getDataFromServer = async () => {
  const reqUrl = resolve(baseUrl, '/');
  const response = await axios.get(baseUrl);
  return response.data;
};
getDataFromServer().then((data) => {
  console.log(Object.keys(data));
  console.log(data.key1);
  console.log(data.key2);
});