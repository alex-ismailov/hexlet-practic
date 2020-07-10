import Express from 'express';
import bodyParser from 'body-parser';

import Post from './entities/Post.js';

export default () => {
  const app = new Express();
  app.set('view engine', 'pug');
  app.use('/assets', Express.static(process.env.NODE_PATH.split(':')[0]));
  app.use(bodyParser.urlencoded({ extended: false }));

  const posts = [
    new Post('hello', 'how are you?'),
    new Post('nodejs', 'story about nodejs'),
  ];

  app.get('/', (req, res) => {
    res.render('index');
  });

  // BEGIN (write your solution here)
  
  // END

  return app;
};
