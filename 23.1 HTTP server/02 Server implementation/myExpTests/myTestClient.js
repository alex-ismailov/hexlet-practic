import axios from 'axios';

const url = 'http://localhost:8080';
const receivedDataPromise = axios.get(url);
receivedDataPromise
  .then((phonebook) => {
    const pbStrings = phonebook.data
      .trim()
      .split('\n');
    console.log('Welcome to The Phonebook');
    console.log(`Records count: ${pbStrings.length}`);
  });
