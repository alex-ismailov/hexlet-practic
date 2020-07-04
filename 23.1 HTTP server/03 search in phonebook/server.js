import http from 'http';

export default (usersById) => http.createServer((request, response) => {
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search')) {
      // BEGIN (write your solution here)
      const url = new URL(request.url, `http://${request.headers.host}`);
      const subStr = url.searchParams.get('q');

      if (!subStr) {
        response.end();
        return;
      }

      const normalizedSearch = subStr.trim().toLowerCase();
      const result = Object.values(usersById)
        .filter((user) => user.name.toLowerCase().includes(normalizedSearch))
        .map((user) => `${user.name}, ${user.phone}`)
        .join('\n');
      
      response.end(result);
      // END
    }
  });

  request.resume();
});
