import Express from 'express';
import bodyParser from 'body-parser';

import path from 'path';
import Post from './entities/Post.js';


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
    res.render('posts/index', { posts });
  });

  app.get('/posts/new', (req, res) => { // форма для создания нового поста
    res.render('posts/new', { form: {}, errors: {} });
  });

  app.get('/posts/:id', (req, res) => { // страница поста
    const post = posts.find((p) => p.id.toString() === req.params.id);
    res.render('posts/show', post);
  });

  app.post('/posts', (req, res) => { // форма для создания нового поста
    const { title, body } = req.body;
    
    const errors = {};
    if (!title) {
      errors.title = "Can't be blank";
    }
    if (!body) {
      errors.body = "Can't be blank";
    }

    if (Object.keys(errors).length === 0) {
      const newPost = new Post(title, body);
      posts.push(newPost);
      res.redirect(`/posts/${newPost.id}`);
      return;
    }

    res.status(422);
    res.render('posts/new', { form: req.body, errors });
  });
  // END

  return app;
};
