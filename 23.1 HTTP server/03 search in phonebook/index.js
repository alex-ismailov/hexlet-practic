import { promises as fs } from 'fs';
import _ from 'lodash';
import path from 'path';

import makeServer from './server.js';

export default async (port, callback = () => {}) => {
  // const data = await fs.readFile(path.resolve(__dirname, 'phonebook.txt'));
  const data = await fs.readFile(path.join(path.resolve(), '23.1 HTTP server/03 search in phonebook/phonebook.txt'), 'utf-8');

  // BEGIN (write your solution here)
  const userRows = data.trim().split('\n');
  const usersById = userRows.reduce((acc, user) => {
    const splited = user.split('|').map((item) => item.trim());
    const [id, name, phone] = splited;
    // return { ...acc, [id]: { name, phone } };
    return _.set(acc, id, { name, phone });
  }, {});
  // END

  const server = makeServer(usersById);
  server.listen(port, () => callback(server));
};
