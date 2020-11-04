/* eslint-disable no-param-reassign, no-console  */

import _ from 'lodash';
// import * as y from 'yup';
import * as yup from 'yup';
// not work
// NOTE: because of incompatability between commonjs and esm
// const yup = !y.object ? y.default : y;

import onChange from 'on-change';
import axios from 'axios';



// Never hardcore urls
const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required()
    .oneOf(
      [yup.ref('password'), null],
      'Password confirmation does not match to password',
    ),
});

const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// BEGIN (write your solution here)
export default () => {};
// END
