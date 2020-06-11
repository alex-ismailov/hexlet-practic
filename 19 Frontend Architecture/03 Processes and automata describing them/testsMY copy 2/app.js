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

const render = (state, element, elementName) => {
  let newElement;
  if (state.registrationProcess[elementName] === 'filling') {
    newElement = buildForm(elementName);
    element.innerHTML = newElement.outerHTML;
    const form = element.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // console.log('pushed submit@@@');
      state.registrationProcess[elementName] = 'finshed'
      
    });
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
  elements.forEach((element) => element.addEventListener('click', ({ target }) => {
    const elementName = target.parentNode.dataset.editableTarget;
    state.registrationProcess[elementName] = 'filling';
    render(state, target.parentNode, elementName);
  }));
};

// Попробуй сетить в стейте в каком режиме ты находишься
// и в handle уже проверять этот режим из стейта

// export default app;

app();
// END
