import { promises as fs } from 'fs';
import path from 'path';
import _ from 'lodash';

import makeServer from './server.js';

export default async (port, callback = () => {}) => {
  const data = await fs.readFile(path.join(path.resolve(), '23.1 HTTP server/08 request body processing/bin/phonebook.js'));
  const users = data.toString()
    .trim()
    .split('\n')
    .map((value) => value.split('|').map((item) => item.trim()));
  const usersIds = users.map(([id]) => id);
  const usersData = users.map(([, name, phone]) => ({ name, phone }));
  const usersById = _.zipObject(usersIds, usersData);

  const server = makeServer(usersById);
  server.listen(port, callback.bind(null, server));
};
