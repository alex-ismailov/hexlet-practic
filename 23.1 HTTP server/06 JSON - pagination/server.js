import http from 'http';

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

      // console.log(`page: ${page}; perPage: ${perPage}`);
      // console.log(usersById['10']);
      // console.log(usersById);
      console.log('------------\n');
      
      /* сделать группы по perPage */
      const users = Object.values(usersById);
      console.log(users);

      const usersPages = Object.values(usersById)
        .reduce((acc, item) => {
          if (acc[acc.length - 1].length === perPage) {
            acc.push([]);
          }
          acc[acc.length - 1].push(item);
          return acc;
        }, [[]]);

      console.log(usersPages[page]);
      console.log(`page: ${page}; perPage: ${perPage}`);
      console.log(url.searchParams.get('page'));
      console.log(url.searchParams.get('perPage'));

      response.end();
      // END
    }
  });
  request.resume();
});

// {
//   "meta": { "page": 5, "perPage": 2, "totalPages": 500  },
//   "data": [
//     { "name": "Mrs. Marlee Lesch", "phone": "(412) 979-7311" },
//     { "name": "Mrs. Mabelle Cormier", "phone": "307.095.4754" }
//   ]
// }
