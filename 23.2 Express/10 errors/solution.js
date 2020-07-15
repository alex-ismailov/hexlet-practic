import Express from 'express';
// import morgan from 'morgan';
import path from 'path';

import Post from './entities/Post.js';
import NotFoundError from './errors/NotFoundError.js';

export default () => {
  const app = new Express();
  // app.use(morgan('combined'));
  app.set('view engine', 'pug');

  /* local views directory location */
  app.set('views', path.join(path.resolve(), '23.2 Express/10 errors/views'));

  const posts = [
    new Post('hello', 'how are your?'),
    new Post('nodejs', 'story about nodejs'),
  ];

  app.get('/', (_req, res) => {
    res.render('index', { posts });
  });

  app.get('/posts/:id', (req, res, next) => {
    const post = posts.find((p) => p.id.toString() === req.params.id);
    if (post) {
      res.render('posts/show', { post });
    } else {
      next(new NotFoundError());
    }
  });

  // BEGIN (write your solution here)
  app.use((_req, _res, next) => {
    next(new NotFoundError());
  });

  app.use((err, _req, res, next) => {
    res.status(err.status);
    switch (err.status) {
      case 404:
        res.render(err.status.toString());
        break;
      default:
        next(new Error('Unexpected error'));
    }
  });
  // END

  return app;
};
