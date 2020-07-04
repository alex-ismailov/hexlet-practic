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
    const [id, name, phone] = user.split('|');
    return { ...acc,  [id]: { name, phone } };
  }, {});
  // console.log(usersById); // good
  // END

  const server = makeServer(usersById);
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('server started! les 3');
    return callback(server);
  });
};
