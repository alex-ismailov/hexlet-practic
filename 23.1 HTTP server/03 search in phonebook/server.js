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
      if (!request.url.includes('?')) {
        response.end('');
        return;
      }
      const url = new URL(request.url, `http://${request.headers.host}`);
      const subStr = url.searchParams.get('q');

      const keys = Object.keys(usersById);
      const requiredUsers = keys.reduce((acc, key) => {
        const userName = usersById[key].name.toLowerCase();
        return userName.includes(subStr.toLowerCase())
          ? [...acc, usersById[key]]
          : acc;
      }, []);

      const resString = requiredUsers
        .map((user) => `${user.name}, ${user.phone}`)
        .join('\n');

      response.end(resString);
      // END
    }
  });

  request.resume();
});
