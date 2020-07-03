#!/usr/bin/env node

import solution from '../server.js';

console.log(solution);

const port = 8080;
solution(port, () => {
  // eslint-disable-next-line no-console
  console.log('server started!');
});
