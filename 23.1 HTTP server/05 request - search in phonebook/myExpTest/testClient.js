import axios from 'axios';

const url = 'http://localhost:8080';

axios.get(url)
  .then((content) => {
    console.log(content);
  });