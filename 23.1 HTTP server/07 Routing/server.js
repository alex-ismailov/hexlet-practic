import http from 'http';
import _ from 'lodash';

const getParams = (address, host) => {
  const url = new URL(address, `http://${host}`);
  const keys = url.searchParams.keys();
  const values = url.searchParams.values();
  return _.zipObject(keys, values);
};

const router = {
  GET: {
    '/users/(\\w+).json': (req, res, matches, usersById) => {
      // BEGIN (write your solution here)
      const [, userId] = matches;
      const user = usersById[userId];
      if (!user) {
        res.writeHead(404);
        res.end();
        return;
      }
      const responseObj = { data: user };
      res.setHeader(
        'Content-Type', 'application/json',
      );
      res.end(JSON.stringify(responseObj));
      // END
    },
    '/': (req, res, matches, usersById) => {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      res.end(messages.join('\n'));
    },

    '/search.json': (req, res, matches, usersById) => {
      res.setHeader('Content-Type', 'application/json');

      const { q = '' } = getParams(req.url, req.headers.host);
      const normalizedSearch = q.trim().toLowerCase();
      const ids = Object.keys(usersById);

      const usersSubset = ids
        .filter((id) => usersById[id].name.toLowerCase().includes(normalizedSearch))
        .map((id) => usersById[id]);
      res.end(JSON.stringify({ data: usersSubset }));
    },

    '/users.json': (req, res, matches, usersById) => {
      res.setHeader('Content-Type', 'application/json');

      const { page = 1, perPage = 10 } = getParams(req.url, req.headers.host);
      const ids = Object.keys(usersById);

      const usersSubset = ids.slice((page * perPage) - perPage, page * perPage)
        .map((id) => usersById[id]);
      const totalPages = Math.ceil((ids.length) / perPage);
      res.end(JSON.stringify({ meta: { page, perPage, totalPages }, data: usersSubset }));
    },
  },
};

export default (users) => http.createServer((request, response) => {
  const routes = router[request.method];
  // console.log(routes); //
  const result = Object.keys(routes).find((str) => {
    const { pathname } = new URL(request.url, `http://${request.headers.host}`);
    // console.log(pathname);
    // console.log(str); //
    if (!pathname) {
      return false;
    }
    const regexp = new RegExp(`^${str}$`);
    const matches = pathname.match(regexp);
    if (!matches) {
      return false;
    }
    // console.log(matches); //
    routes[str](request, response, matches, users);
    return true;
  });

  if (!result) {
    response.writeHead(404);
    response.end();
  }
});
