import solution from '../solution.js';

const port = 8080;
solution().listen(port, () => {
  console.log(`Started on port ${port}`);
});
