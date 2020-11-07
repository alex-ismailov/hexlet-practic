const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return _.keyBy(e.inner, 'path');
  }
};

const updateValidationState = (watchedState) => {
  const errors = validate(watchedState.form.fields);
  watchedState.form.valid = _.isEqual(errors, {});
  watchedState.form.errors = errors;
};

const renderErrors = (elements, errors) => {
  Object.entries(elements).forEach(([name, element]) => {
    const errorElement = element.nextElementSibling;
    const error = errors[name];
    if (errorElement) {
      element.classList.remove('is-invalid');
      errorElement.remove();
    }
    if (!error) {
      return;
    }
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('invalid-feedback');
    feedbackElement.innerHTML = error.message;
    element.classList.add('is-invalid');
    element.after(feedbackElement);
  });
};

export default () => {
  const state = {
    form: {
      processState: 'filling',
      processError: null,
      fields: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      valid: true,
      errors: {},
    },
  };

  const container = document.querySelector('[data-container="sign-up"]');
  const form = document.querySelector('[data-form="sign-up"]');
  const fieldElements = {
    name: document.getElementById('sign-up-name'),
    email: document.getElementById('sign-up-email'),
    password: document.getElementById('sign-up-password'),
    passwordConfirmation: document.getElementById('sign-up-password-confirmation'),
  };
  const submitButton = form.querySelector('button');

  const processStateHandler = (processState) => {
    switch (processState) {
      case 'failed':
        submitButton.disabled = false;
        // TODO render error
        break;
      case 'filling':
        submitButton.disabled = false;
        break;
      case 'sending':
        submitButton.disabled = true;
        break;
      case 'finished':
        container.innerHTML = 'User Created!';
        break;
      default:
        throw new Error(`Unknown state: ${processState}`);
    }
  };

  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'form.processState':
        processStateHandler(value);
        break;
      case 'form.valid':
        submitButton.disabled = !value;
        break;
      case 'form.errors':
        renderErrors(fieldElements, value);
        break;
      default:
        break;
    }
  });

  Object.entries(fieldElements).forEach(([name, element]) => {
    element.addEventListener('input', (e) => {
      watchedState.form.fields[name] = e.target.value;
      updateValidationState(watchedState);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    watchedState.form.processState = 'sending';
    try {
      await axios.post(routes.usersPath(), watchedState.form.fields);
      watchedState.form.processState = 'finished';
    } catch (err) {
      // TODO: Real behavior depends on the status code of response
      watchedState.form.processError = errorMessages.network.error;
      watchedState.form.processState = 'failed';
      throw err;
    }
  });
};