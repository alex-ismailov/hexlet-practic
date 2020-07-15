import solution from '../solution.js';

const port = 8080;
solution().listen(port, () => {
  console.log(`Server was started on '${port}'`);
});
