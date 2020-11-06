/* eslint-disable no-param-reassign, no-console  */

import _ from 'lodash';
import * as yup from 'yup';
// import * as y from 'yup';
// const yup = y.default;
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


export default () => {

  // => Views
  const render = (data) => {
    console.log(data);
  };

  const removeErrorsFromDOM = () => {
    const errorElements = document.querySelectorAll('.invalid-feedback');
    console.log(errorElements);
    errorElements.forEach((element) => element.remove());

    const inputs = document.querySelectorAll(`input[name]`);
    inputs.forEach((input) => input.classList.remove('is-invalid'))
  };

  const renderErrors = (errors) => {
    errors.forEach(({ path, message }) => {
      const input = document.querySelector(`input[name="${path}"]`);
      const inputParent = input.parentNode;
      const prevErrorElement = inputParent.querySelector('.invalid-feedback');
      if (prevErrorElement) {
        prevErrorElement.remove();
      }

      input.classList.add('is-invalid');
      const errorElement = document.createElement('div');
      errorElement.classList.add('invalid-feedback');
      errorElement.textContent = message;
      input.after(errorElement);
    });
  };

  // => Model
  const state = {
    submitDisabled: true,
    data: {
      // name: '',
      // email: '',
      // password: '',
    },
    errors: [],
  };

  const watchedState = onChange(state, (path, value) => {
    if (path === 'errors') {
      renderErrors(value);
    } else {
      removeErrorsFromDOM();
      // axios.post();
      render(value);
    }
  });

  // => Controllers
  const handleFormSubmit = (e) => {};

  const handleFormInput = (e) => {
    const { target } = e;
    const formData = new FormData(form);
    const inputsValues = Object.fromEntries(formData);

    if (Object.values(inputsValues).length === 0) {
      watchedState.errors = [];
      return;
    }
    
    try {
      schema.validateSync(inputsValues, { abortEarly: false });
      const data = _.omit(inputsValues, 'passwordConfirmation');
      watchedState.data = data;
      // watchedState.data = { ...watchedState.data, ...data };
      
    } catch ({ inner }) {
      const errors = inner.map(({ path, message }) => ({ path, message }));
      // watchedState.errors = [...watchedState.errors, ...errors];
      watchedState.errors = errors;
    }
  };

//   (4) [ValidationError, ValidationError, ValidationError, ValidationError]
// 0: ValidationError {name: "ValidationError", value: "", path: "email", type: "required", errors: Array(1), …}
// 1: ValidationError {name: "ValidationError", value: "", path: "passwordConfirmation", type: "required", errors: Array(1), …}
// 2: ValidationError {name: "ValidationError", value: "", path: "password", type: "required", errors: Array(1), …}
// 3: ValidationError {name: "ValidationError", value: "", path: "password", type: "min", errors: Array(1), …}

  const form = document.querySelector('form');
  form.addEventListener('input', handleFormInput);
};  // app end
// END


// https://ru.hexlet.io/topics/41914
// https://ru.hexlet.io/topics/41742
// https://ru.hexlet.io/topics/41272
// https://ru.hexlet.io/topics/41272
// https://ru.hexlet.io/topics/41272













// my tests
// const testData = {
//   email: 'boxbox.ru',
//   password: '123456',
//   passwordConfirmation: '123456 7',
// };
// // inner это массив
// try {
//   schema.validateSync(testData, { abortEarly: false });
// } catch (errors) {
//   console.log('BAM!!!');
//   const errs = errors.inner.flatMap(({ errors }) => errors);
//   console.log(errs);
// }

// console.log('script end');
