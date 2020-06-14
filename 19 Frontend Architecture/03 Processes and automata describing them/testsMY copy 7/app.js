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

const handleFormOnSubmit = (state, elementName) => (e) => {
  e.preventDefault();
  state.registrationProcess[elementName] = 'finished';
  const divWrapper = document.querySelector(`div[data-editable-target="${elementName}"]`);
  const formData = new FormData(e.target);
  const content = formData.get(elementName);

  render(state, divWrapper, elementName, content);
};

const handleFormOnInput = (state, elementName) => (e) => {
  state.registrationProcess[elementName] = 'disabled';
  const content = e.target.value;
  const divWrapper = document.querySelector(`div[data-editable-target="${elementName}"]`);
  if (content === '') {
    const defaultContent = elementName;
    render(state, divWrapper, elementName, defaultContent);
  }
};

const handleDivOnClick = (state) => (e) => {
  const div = e.currentTarget;
  const divName = div.dataset.editableTarget;
  state.registrationProcess[divName] = 'filling';

  render(state, div, divName);
};

const render = (state, element, elementName, content, handler) => {
  if (state.registrationProcess[elementName] === 'filling') {
    const form = buildForm(elementName);
    form.addEventListener('submit', handleFormOnSubmit(state, elementName));
    form.addEventListener('input', handleFormOnInput(state, elementName));

    element.innerHTML = '';
    element.append(form);

    return;
  }
  if (state.registrationProcess[elementName] === 'finished') {
    element.innerHTML = content;
    return;
  }
  if (state.registrationProcess[elementName] === 'disabled') {
    element.innerHTML = '';
    element.innerHTML = `<i>${elementName}</i>`;
    element.addEventListener('click', handleDivOnClick(state), { once: true });
  }
};

const app = () => {
  const state = {
    registrationProcess: {
      name: 'disabled',
      email: 'disabled',
    },
  };

  const elements = document.querySelectorAll('div[data-editable-target]');
  elements.forEach((element) => element.addEventListener('click', handleDivOnClick(state), { once: true }));
};

// export default app;
// export default app;

app();
// END
