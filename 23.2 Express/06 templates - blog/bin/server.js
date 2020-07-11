import solution from '../solution.js';

const port = 8080;
solution().listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server was started on '${port}', at ${new Date().toLocaleString()}`);
});
