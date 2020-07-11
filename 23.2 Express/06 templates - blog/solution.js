import Express from 'express';
import bodyParser from 'body-parser';

import Post from './entities/Post.js';

import path from 'path';

export default () => {
  const app = new Express();
  app.set('view engine', 'pug');
  app.use('/assets', Express.static(process.env.NODE_PATH.split(':')[0]));
  app.use(bodyParser.urlencoded({ extended: false }));

  /* local views directory location */
  app.set('views', path.join(path.resolve(), '23.2 Express/06 templates - blog/views'));

  const posts = [
    new Post('hello', 'how are you?'),
    new Post('nodejs', 'story about nodejs'),
  ];

  app.get('/', (req, res) => {
    res.render('index');
  });

  // BEGIN (write your solution here)
  app.get('/posts', (req, res) => { // список постов
    const data = { postsList: posts};
    res.render('posts/index', data);
  });

  app.get('/posts/:id', (req, res) => { // страница поста

  });

  app.get('/posts/new', (req, res) => { // форма для создания нового поста
    
  });

  app.post('/posts', (req, res) => { // форма для создания нового поста
    
  });
  // END

  return app;
};
