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

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
    
  //   console.log('pushed button Save');

  //   document.body.innerHTML = '##########@@@@@@@@@@@@@@';
  // });

  return form;
};


const showData = (element, content) => {
  element.innerHTML = content;
};

const handle = (element, currentTargetName, state) => {
  let newElement;

  if (state.registrationProcess[currentTargetName] === 'filling') {
    newElement = buildForm(currentTargetName);
    
  }

  if (state.registrationProcess[currentTargetName] === 'finished') {
    newElement = showData(element, data);
  }
  
  const render = (state) => {
    element.innerHTML = newElement.outerHTML;
  };
    

  render(state);
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
    // console.log(target.parentNode);
    const currentTargetName = target.parentNode.dataset.editableTarget;
    state.registrationProcess[currentTargetName] = 'filling';
    handle(target.parentNode, currentTargetName, state);
  }));
};

// Попробуй сетить в стейте в каком режиме ты находишься
// и в handle уже проверять этот режим из стейта

// export default app;
app();
// END
