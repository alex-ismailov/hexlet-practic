import Express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import encrypt from './encrypt.js';
import User from './entities/User.js';
import Guest from './entities/Guest.js';

import path from 'path';

export default () => {
  const app = new Express();
  app.use(morgan('combined'));
  app.use(methodOverride('_method'));
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/assets', Express.static(process.env.NODE_PATH.split(':')[0]));
  app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
  }));

  /* local views directory location */
  app.set('views', path.join(path.resolve(), '23.2 Express/11 sessions/views'));

  const users = [new User('admin', encrypt('qwerty'))];

  app.use((req, res, next) => {
    if (req.session?.nickname) {
      const { nickname } = req.session;
      res.locals.currentUser = users.find((user) => user.nickname === nickname);
    } else {
      res.locals.currentUser = new Guest();
    }
    next();
  });

  app.get('/', (_req, res) => {
    res.render('index');
  });

  // BEGIN (write your solution here)
  app.get('/users/new', (req, res) => {
    res.render('users/new', { form: users, errors: {} });
  });

  app.post('/users/', (req, res) => {
    const { nickname, password } = req.body;
    const errors = {};

    if (!nickname) {
      errors.nickname = "Nickname can't be blank";
    }
    if (users.find((user) => user.nickname === nickname)) {
      errors.nickname = 'This nickname is already taken';
    }
    if (!password) {
      errors.password = "Password can't be blank";
    }

    if (Object.keys(errors).length > 0) {
      res.status(422);
      res.render('users/new', { form: req.body, errors });
      return;
    }
    // TODO
    const newUser = new User(nickname, encrypt(password));
    users.push(newUser);
    res.redirect('/');
  });

  app.get('/session/new', (req, res) => {
    res.render('session/new', { form: {}, errors: {}});
  });

  app.post('/session', (req, res) => {
    
  });

  app.delete('/session', (req, res) => {
    
  });
  // END

  return app;
};
