import Express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import encrypt from './encrypt.js';
import User from './entities/User.js';
import Guest from './entities/Guest.js';

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
  
  // END

  return app;
};
