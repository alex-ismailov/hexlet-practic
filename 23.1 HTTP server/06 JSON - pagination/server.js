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
      const page = Number(url.searchParams.get('page')) || 1;
      const perPage = Number(url.searchParams.get('perPage')) || 10;
      const usersValues = Object.values(usersById);

      const end = page * perPage;
      const start = end - perPage;
      const pages = Math.ceil(usersValues.length / perPage);
      const chunk = usersValues.slice(start, end);

      const responseObj = {
        meta: { page, perPage, totalPages: pages },
        data: chunk,
      };

      response.setHeader(
        'Content-Type', 'application/json',
      );

      response.end(JSON.stringify(responseObj));
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
