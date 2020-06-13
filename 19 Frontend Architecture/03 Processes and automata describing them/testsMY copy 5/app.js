// BEGIN (write your solution here)
const render = (state, element, elementName, content) => {
  console.log(element);
  if (state.registrationProcess[elementName] === 'filling') {
    const form = buildForm(elementName);
    // form.addEventListener('submit', (e) => handleFormOnSubmit(e, elementName, state));
    // form.addEventListener('input', (e) => handleFormOnInput(e, elementName, state));
    element.innerHTML = '';
    element.appendChild(form);
    element.firstChild.addEventListener('submit', (e) => handleFormOnSubmit(e, elementName, state));
    element.firstChild.addEventListener('input', (e) => handleFormOnInput(e, elementName, state));
    // element.innerHTML = form.outerHTML;
    console.log('in render');
    console.log(element);
    
 
    return;
  }
  if (state.registrationProcess[elementName] === 'finished') {
    console.log(content);
    element.innerHTML = content;
    console.log(element);
    return;
  }
  if (state.registrationProcess[elementName] = 'disabled') {
    element.innerHTML = '';
    element.innerHTML = content;
    element.firstChild.addEventListener('click', (e) => handleDivOnClick(state, e));
    return;
  }
};

const buildForm = (nameOfInput) => {
  const form = document.createElement('form')//.focus();
  const input = document.createElement('input')//.focus();
  input.type = 'text';
  input.name = nameOfInput;
  // input.value = '';
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
  console.log(e.target.parentNode);
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

const handleDivOnClick = (state, e) => {
    const elementName = e.target.parentNode.dataset.editableTarget;
    state.registrationProcess[elementName] = 'filling';
    render(state, e.target.parentNode, elementName);
};
  
const app = () => {
  const state = {
    registrationProcess: {       
      name: 'disabled',
      email: 'disabled',
    }
  };

  const elements = document.querySelectorAll('div[data-editable-target] i');
  elements.forEach((element) => element.addEventListener('click', (e) => handleDivOnClick(state, e)));
};

// export default app;
export default app;

// app();
// END
