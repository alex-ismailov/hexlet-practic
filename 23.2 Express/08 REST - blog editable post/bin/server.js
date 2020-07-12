import runServer from '../application.js';

const port = 8080;
runServer().listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server has been started, at ${new Date()}`)
});
