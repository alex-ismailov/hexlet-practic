import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import path from 'path';
import Post from './entities/Post.js';


export default () => {
  const app = new Express();
  app.use(morgan('combined'));
  app.set('view engine', 'pug');
  app.use('/assets', Express.static(process.env.NODE_PATH.split(':')[0]));
  app.use(methodOverride('_method'));
  app.use(bodyParser.urlencoded({ extended: false }));


  /* local views directory location */
  app.set('views', path.join(path.resolve(), '23.2 Express/08 REST - blog editable post/views'));

  let posts = [
    new Post('hello', 'how are your?'),
    new Post('nodejs', 'story about nodejs'),
  ];

  app.get('/', (_req, res) => {
    res.render('index');
  });

  app.get('/posts', (_req, res) => {
    res.render('posts/index', { posts });
  });

  app.get('/posts/new', (_req, res) => {
    res.render('posts/new', { form: {}, errors: {} });
  });

  app.get('/posts/:id', (req, res) => {
    const post = posts.find((p) => p.id.toString() === req.params.id);
    res.render('posts/show', { post });
  });

  app.post('/posts', (req, res) => {
    const { title, body } = req.body;

    const errors = {};
    if (!title) {
      errors.title = "Title can't be blank";
    }

    if (!body) {
      errors.body = "Body can't be blank";
    }

    if (Object.keys(errors).length === 0) {
      const post = new Post(title, body);
      posts.push(post);
      res.redirect(`/posts/${post.id}`);
      return;
    }

    res.status(422);
    res.render('posts/new', { form: req.body, errors });
  });

  // BEGIN (write your solution here)
  app.get('/posts/:id/edit', (req, res) => {
    const post = posts.find((p) => p.id.toString() === req.params.id);
    res.render('posts/edit', { post, form: post, errors: {} });
  });

  app.patch('/posts/:id', (req, res) => {
    const { title, body } = req.body;
    const post = posts.find((p) => p.id.toString() === req.params.id);

    const errors = {};
    if (!title) {
      errors.title = "Title can't be blank";
    }

    if (!body) {
      errors.body = "Body can't be blank";
    }

    if (Object.keys(errors).length > 0) {
      res.status(422);
      res.render('posts/edit', { form: { id: post.id, ...req.body }, errors });
      return;
    }

    post.title = title;
    post.body = body;
    res.redirect('/posts');
  });

  app.delete('/posts/:id', (req, res) => {
    // const post = posts.find((p) => p.id.toString() === req.params.id);
    // const index = posts.indexOf(post);
    // posts.splice(index, 1);
    posts = posts.filter((post) => post.id.toString() !== req.params.id);
    res.redirect('/posts');
  });
  // END

  return app;
};
