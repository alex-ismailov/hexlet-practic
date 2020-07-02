import { resolve } from 'url';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const getDataFromServer = async () => {
  const reqUrl = resolve(baseUrl, '/');
  // {transformResponse: []} - отключает автоматический парсинг и весь остальной default
  const response = await axios.get(baseUrl, {transformResponse: []});
  return JSON.parse(response.data);
};
getDataFromServer().then((data) => {
  console.log(data.key1);
});