import http from 'http';
import _ from 'lodash';

import { validate, nextId } from './user.js';

const getParams = (address, host) => {
  const url = new URL(address, `http://${host}`);
  const keys = url.searchParams.keys();
  const values = url.searchParams.values();
  return _.zipObject(keys, values);
};

const router = {
  GET: {
    '/': (req, res, matches, body, usersById) => {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      res.end(messages.join('\n'));
    },

    '/search.json': (req, res, matches, body, usersById) => {
      res.setHeader('Content-Type', 'application/json');

      const { q = '' } = getParams(req.url, req.headers.host);
      const normalizedSearch = q.trim().toLowerCase();
      const ids = Object.keys(usersById);

      const usersSubset = ids
        .filter((id) => usersById[id].name.toLowerCase().includes(normalizedSearch))
        .map((id) => usersById[id]);
      res.end(JSON.stringify({ data: usersSubset }));
    },

    '/users.json': (req, res, matches, body, usersById) => {
      res.setHeader('Content-Type', 'application/json');

      const { page = 1, perPage = 10 } = getParams(req.url, req.headers.host);
      const ids = Object.keys(usersById);

      const usersSubset = ids.slice(page * perPage - perPage, page * perPage)
        .map((id) => usersById[id]);
      const totalPages = Math.ceil((ids.length) / perPage);
      res.end(JSON.stringify({ meta: { page, perPage, totalPages }, data: usersSubset }));
    },

    '/users/(\\w+).json': (req, res, matches, body, usersById) => {
      const id = matches[1];
      res.setHeader('Content-Type', 'application/json');
      const user = usersById[id];
      if (!user) {
        res.writeHead(404);
        res.end();
        return;
      }
      res.end(JSON.stringify({ data: user }));
    },
  },
  POST: {
    // BEGIN (write your solution here)
    '/users.json': (req, res, matches, body) => {
      const data = body.join();
      console.log(data);
      if (!data) {
        // TODO
        res.end();
        return;
      }

      res.end();
    },
    // END
  },
};

export default (users) => http.createServer((request, response) => {
  const body = [];

  request
    .on('data', (chunk) => {
      // console.log(chunk.toString());
      body.push(chunk.toString());
      // console.log(body);
    })
    .on('end', () => {
      const routes = router[request.method];
      const result = Object.keys(routes).find((str) => {
        const { pathname } = new URL(request.url, `http://${request.headers.host}`);
        if (!pathname) {
          return false;
        }
        const regexp = new RegExp(`^${str}$`);
        const matches = pathname.match(regexp);
        if (!matches) {
          return false;
        }

        routes[str](request, response, matches, body, users);
        return true;
      });

      if (!result) {
        response.writeHead(404);
        response.end();
      }
    });
});
