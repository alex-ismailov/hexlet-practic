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
    const data = { posts };
    res.render('posts/index', data);
  });

  app.get('/posts/new', (req, res) => { // форма для создания нового поста
    res.render('posts/new');
  });

  app.get('/posts/:id', (req, res) => { // страница поста
    const id = Number(req.params.id);
    const post = posts[id];
    res.render('posts/show', post);
  });

  app.post('/posts', (req, res) => { // форма для создания нового поста
    const { title, body } = req.body;
    if (!title || !body) {
      res.status(422).end();
    }

    const newPost = new Post(title, body);
    posts.push(newPost);
    const url = `/posts/${newPost.id}`;
    res.redirect(url);
  });
  // END

  return app;
};
