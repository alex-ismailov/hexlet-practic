import http from 'http';
import { chunk } from 'lodash';

export default (usersById) => http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err.stack);
  });
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search.json')) {
      response.setHeader('Content-Type', 'application/json');

      const url = new URL(request.url, `http://${request.headers.host}`);
      const q = url.searchParams.get('q');
      const normalizedSearch = q ? q.trim().toLowerCase() : '';

      const result = Object.values(usersById)
        .filter((user) => user.name.toLowerCase().includes(normalizedSearch));

      response.end(JSON.stringify(result));
    } else if (request.url.startsWith('/users.json')) {
      // BEGIN (write your solution here)
      const url = new URL(request.url, `http://${request.headers.host}`);

      const page = url.searchParams.get('page') || 1;
      const perPage = url.searchParams.get('perPage') || 10;

      console.log(`page: ${page}; perPage: ${perPage}`);
      console.log(usersById['10']);
      
      /* сделать группы по perPage */
      const users = Object.values(usersById);
      // console.log(users);

      // const splitArr = (arr, chunks) => arr
      //   .reduce((acc, n, i) => ((acc[i % chunks] = acc[i % chunks] || []).push(n), acc), []);

      // callback(currentValue, index, array)
      const splitArr = (arr, chunkSize) => arr
        .reduce((acc, item, i) => {
          if (i % chunkSize === 0) {
            
          }
        }, []);

      const usersChunks = splitArr(users, 3);
      console.log(usersChunks[0]);

      response.end();
      // END
    }
  });
  request.resume();
});
