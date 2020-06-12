// BEGIN (write your solution here)
const buildForm = (nameOfInput) => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = nameOfInput;
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Save';
  form.append(input, submit);

  return form;
};

const handleFormOnSubmit = (e, elementName, state) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let content = formData.get(elementName);
  state.registrationProcess[elementName] = 'finished';
  render(state, e.target.parentNode, elementName, content);
};

const handleFormOnInput = (e, elementName, state) => {
  let content = e.target.value;
  state.registrationProcess[elementName] = 'disabled';
  if (content === '') {
    const newContent = `<i>${elementName}</i>`;
    const div = e.target.closest('div');
    render(state, div, elementName, newContent);
  }
};

const handleDiv = (state, e) => {
    const elementName = e.target.parentNode.dataset.editableTarget;
    state.registrationProcess[elementName] = 'filling';
    render(state, e.target, elementName);
};

const render = (state, element, elementName, content) => {
  if (state.registrationProcess[elementName] === 'filling') {
    const form = buildForm(elementName);
    form.addEventListener('submit', (e) => handleFormOnSubmit(e, elementName, state));
    form.addEventListener('input', (e) => handleFormOnInput(e, elementName, state));
    element.innerHTML = '';
    element.append(form);
    return;
  }
  if (state.registrationProcess[elementName] === 'finished') {
    element.innerHTML = content;
    return;
  }
  if (state.registrationProcess[elementName] = 'disabled') {
    console.log('in render for disabled');
    console.log(element);
    element.innerHTML = content;
    element.addEventListener('click', (e) => handleDiv(state, e));
    return;
  }
};
  
const app = () => {
  const state = {
    registrationProcess: {       
      name: 'disabled',
      email: 'disabled',
    }
  };

  const elements = document.querySelectorAll('div[data-editable-target] i');
  // elements.forEach((element) => element.addEventListener('click', ({ target }) => {
  //   const elementName = target.parentNode.dataset.editableTarget;
  //   state.registrationProcess[elementName] = 'filling';

  //   render(state, target.parentNode, elementName);
  // }));
  elements.forEach((element) => element.addEventListener('click', (e) => handleDiv(state, e)));
};

// export default app;

app();
// END
