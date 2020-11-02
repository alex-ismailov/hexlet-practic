/* eslint-disable no-param-reassign */

// BEGIN (write your solution here)
const buildForm = (nameOfInput) => {
  const form = document.createElement('form');// .focus();
  const input = document.createElement('input');// .focus();
  input.type = 'text';
  input.name = nameOfInput;
  input.setAttribute('value', '');

  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Save';
  form.append(input, submit);

  return form;
};

const render = (state, element, elementName, handle, content) => {
  if (state.registrationProcess[elementName] === 'filling') {
    const form = buildForm(elementName);
    form.addEventListener('submit', handle.onSubmit(state, elementName));
    form.addEventListener('input', handle.onInput(state, elementName));

    element.innerHTML = '';
    element.append(form);

    return;
  }
  if (state.registrationProcess[elementName] === 'finished') {
    element.innerHTML = content;
    element.addEventListener('click', handle.onClick(state), { once: true });
    return;
  }
  if (state.registrationProcess[elementName] === 'disabled') {
    element.innerHTML = '';
    element.innerHTML = `<i>${elementName}</i>`;
    element.addEventListener('click', handle.onClick(state), { once: true });
  }
};

const handle = {
  onClick: (state) => (e) => {
    const div = e.currentTarget;
    const divName = div.dataset.editableTarget;
    state.registrationProcess[divName] = 'filling';

    render(state, div, divName, handle);
  },
  onSubmit: (state, elementName) => (e) => {
    e.preventDefault();
    state.registrationProcess[elementName] = 'finished';
    const divWrapper = document.querySelector(`div[data-editable-target="${elementName}"]`);
    const formData = new FormData(e.target);
    const content = formData.get(elementName);

    if (content === '') {
      state.registrationProcess[elementName] = 'disabled';
      const defaultContent = elementName;
      render(state, divWrapper, elementName, handle, defaultContent)
    } else {
      render(state, divWrapper, elementName, handle, content);
    }
  },
  onInput: (state, elementName) => (e) => {
    const content = e.target.value;
    const divWrapper = document.querySelector(`div[data-editable-target="${elementName}"]`);
    if (content === '') {
      state.registrationProcess[elementName] = 'disabled';
      const defaultContent = elementName;
      render(state, divWrapper, elementName, handle, defaultContent);
    }
  },
};

const app = () => {
  const state = {
    registrationProcess: {
      name: 'disabled',
      email: 'disabled',
    },
  };

  const elements = document.querySelectorAll('div[data-editable-target]');
  elements.forEach((element) => element.addEventListener('click', handle.onClick(state), { once: true }));
};

export default app;
// END

// Замыкание
// https://ru.hexlet.io/topics/42731

// state
// https://ru.hexlet.io/topics/36509

// curring
// 