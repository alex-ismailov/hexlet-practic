#!/usr/bin/env babel-node

import app from '../server.js';

const port = 8080;
app().listen(port, () => {
  console.log(`Server was started on '${port}'`);
});
