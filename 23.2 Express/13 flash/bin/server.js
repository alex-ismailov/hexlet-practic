#!/usr/bin/env babel-node

import solution from '../solution.js';

const port = 8080;
solution().listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server was started on '${port}'`);
});
