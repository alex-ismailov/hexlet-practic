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
  const removePrevErrors = () => {
    const errorElements = document.querySelectorAll('.invalid-feedback');
    if (errorElements.length > 0) {
      errorElements.forEach((errorElement) => errorElement.remove());
    }
    
    const inputsWithError = document.querySelectorAll('.is-invalid');
    inputsWithError.forEach((input) => input.classList.remove('is-invalid'));
  };

  const renderErrors = (errors) => {
    removePrevErrors();

    errors.forEach(({ path, message }) => {
      const input = document.querySelector(`input[name="${path}"]`);

      input.classList.add('is-invalid');
      const errorElement = document.createElement('div');
      errorElement.classList.add('invalid-feedback');
      errorElement.textContent = message;
      input.after(errorElement);
    });
  };

  // const render = () => {
  //   removePrevErrors();
  // };

  const changeBtnAvailability = (isDisabled) => {
    const btn = document.querySelector('button.btn');
    if (isDisabled) {
      btn.setAttribute('disabled', '');
      return;
    }
    btn.removeAttribute('disabled');
  };

  const renderSuccess = () => {
    const container = document.querySelector('[data-container="sign-up"]');
    container.innerHTML = 'User Created!';
  };

  // => Model
  const state = {
    status: 'filling', // processing, finished
    isDisabledBtn: true,
    data: {
      // name: '',
      // email: '',
      // password: '',
    },
    errors: [],
  };

  const handleStatus = (status) => {
    switch (status) {
      case 'processing':
        watchedState.isDisabledBtn = true;
        return;
      case 'finished':
        renderSuccess();

      default:
        // TODO new Exception;
    }
  };

  const mapping = {
    errors: (errors) => renderErrors(errors),
    data: () => removePrevErrors(),
    isDisabledBtn: (isDisabled) => changeBtnAvailability(isDisabled),
    status: (value) => handleStatus(value),
  };

  const watchedState = onChange(state, (path, value) => {
    mapping[path](value);
  });


  // => Controllers
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const formData = new FormData(target);
    const inputsValues = Object.fromEntries(formData);
    const data = _.omit(inputsValues, 'passwordConfirmation');


    watchedState.status = 'processing';

    const response = await axios.post(routes.usersPath(), data);
    console.log(response);
    if (response.status === 200) {
      watchedState.status = 'finished';
      return;
    }
    watchedState.status = 'filling';
    watchedState.errors = errorMessages.network.error;
  };

  const handleFormInput = (e) => {
    const { target } = e;
    const form = target.closest('form');
    const formData = new FormData(form);
    const inputsValues = Object.fromEntries(formData);
    const isEmptyInputsValues = Object.keys(inputsValues)
      .every((key) => inputsValues[key] === '');
    console.log(isEmptyInputsValues);

    if (isEmptyInputsValues) {
      console.log('EMPTY FIELDS!!!');
      watchedState.errors = [];
      return;
    }

    try {
      schema.validateSync(inputsValues, { abortEarly: false });
      const data = _.omit(inputsValues, 'passwordConfirmation');
      watchedState.data = data;
      // watchedState.data = { ...watchedState.data, ...data };
      watchedState.isDisabledBtn = false;
    } catch ({ inner }) {
      const errors = inner.map(({ path, message }) => ({ path, message }));
      // watchedState.errors = [...watchedState.errors, ...errors];
      watchedState.isDisabledBtn = true;
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
  form.addEventListener('submit', handleFormSubmit);
}; // app end
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
