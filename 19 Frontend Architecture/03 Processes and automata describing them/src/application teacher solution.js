// BEGIN (write your solution here)
const buildText = (name, { value }) => {
  const processedValue = value.trim();
  if (processedValue === '') {
    const i = document.createElement('i');
    i.innerHTML = name;
    return i;
  }
  return document.createTextNode(value);
};

const buildForm = (element, name, state, rerender) => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = name;
  input.setAttribute('value', state.value);
  form.appendChild(input);
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Save';
  form.appendChild(submit);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    state.value = formData.get(name);
    state.mode = 'text';
    rerender(element, name, state);
  });

  return { form, input, submit };
};

const render = (element, name, state) => {
  element.innerHTML = '';
  switch (state.mode) {
    case 'form':
      const result = buildForm(element, name, state, render);
      element.appendChild(result.form);
      result.input.select();
      break;
    case 'text':
      element.appendChild(buildText(name,state));
      break;
    default:
      throw new Error(`Unknown mode: ${state.mode}`);
  }
};

const handle = (element, name, state) => () => {
  if (state.mode === 'text') {
    state.mode = 'form';
    render(element, name, state);
  }
};

const app = () => {
  const elements = document.querySelectorAll('[data-editable-target]');
  elements.forEach((element) => {
    const state = {
      mode: 'text',
      value: '',
    };
    const name = element.dataset.editableTarget;
    element.addEventListener('click', handle(element, name, state));
  });
};
// END

export default app;
