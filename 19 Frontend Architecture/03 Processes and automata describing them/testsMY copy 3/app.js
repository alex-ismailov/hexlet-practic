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
  // let newElement;
  if (state.registrationProcess[elementName] === 'disabled') {
    console.log('first state!!!');
    element.innerHTML = `<i>${elementName}</i>`
  }
  if (state.registrationProcess[elementName] === 'filling') {
    const form = buildForm(elementName);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      state.registrationProcess[elementName] = 'finished';

      render(state, element, elementName);
    });
    form.addEventListener('input', (e) => {
      // Если значение стирается, то тогда текст меняется на первоначальный (и добавляется курсив),
      // такой какой он был до любых изменений:

      // <div data-editable-target="name"><i>name</i></div>
      // <div data-editable-target="email"><i>email</i></div>
      if (e.target.value === '') {
        // e.target.parentNode.replaceWith(element);
        state.registrationProcess[elementName] === 'disabled';
        console.log(state);
        console.log('AGAIN');
        render(state, element, elementName);
      }
      
    });
    element.replaceWith(form);
  }
  if (state.registrationProcess[elementName] === 'finished') {
    // const formData = new Form ......
    // const content = .....
    // element.textContent = content
    element.innerHTML = 'Sended!!!';
    console.log(element);
    console.log('SENDED !!!');
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
