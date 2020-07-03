import { promises as fs } from 'fs';
import path from 'path';
import http from 'http';

export default async (port, callback) => {
  // BEGIN (write your solution here)
  const data = await fs.readFile(path.join(path.resolve(), '23.1 HTTP server/02 Server implementation/phonebook.txt'));
  const users = data.toString()
    .trim()
    .split('\n');

  const server = new http.createServer((request, response) => {
    const messages = [
      'Welcome to The Phonebook',
      `Records count: ${users.length}`,
    ];
    response.end(messages.join('\n'));
  });

  server.listen(port, callback);
  // END
};
