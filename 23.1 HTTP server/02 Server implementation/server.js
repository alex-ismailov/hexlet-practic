import { promises as fs } from 'fs';
import path from 'path';
import http from 'http';

export default async (port, callback) => {
  // BEGIN (write your solution here)

  const getPhoneBook = async () => {
    const pbPath = path.join(`${path.resolve()}/23.1 HTTP server/02 Server implementation/phonebook.txt`);
    console.log(pbPath);
    const phoneBook = await fs.readFile(pbPath, 'utf-8');
    return phoneBook.trim();
  };

  const server = new http.createServer((request, response) => {
    getPhoneBook().then((content) => {
      const pbStrings = content.split('\n');
      const resString = `Welcome to The Phonebook\nRecords count: ${pbStrings.length}`;
      response.write(resString);
      response.end();
    });
  });

  server.listen(port, callback);
  // END
};
