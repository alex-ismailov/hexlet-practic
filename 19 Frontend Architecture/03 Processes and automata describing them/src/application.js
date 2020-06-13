/* Эта задача не сложная алгоритмически, но довольно объемная. На решение потребуется время и это хорошая прокачка

Некоторые интерфейсы допускают редактирование "по месту" (in-place). Это значит что для обновления значений
каких-то данных не нужно переходить на отдельную страницу редактирования, достаточно кликнуть на сам элемент
(или кнопку рядом с ним) как появится форма для изменения конкретно этого значения.

В данной практике нужно построить именно такой интерфейс. Он работает по следующему принципу.
Контейнер внутри которого находятся данные для редактирования, помечается специальным аттрибутом: data-editable-target.
Значением этого атрибута является имя поля. В нашем примере это name и email (исходник доступен в public/index.html).
Начальный HTML выглядит так:

<div data-editable-target="name"><i>name</i></div>
<div data-editable-target="email"><i>email</i></div>
Когда происходит клик на этом элементе, то он заменяется на форму:

<div data-editable-target="name">
  <form>
    <!-- С точки зрения хорошего UX нужно фокусироваться (это позволяет использовать клавиатуру сразу) на этом инпуте и выделять текст внутри него -->
    <!-- Исключение составляет ситуация, когда поле пустое (но отражается текст выделенный курсивом как в примере выше) -->
    <input type="text" name="name">
    <input type="submit" value="Save">
  </form>
</div>
Далее вбивается нужное значение и кнопка Save (отправка формы) возвращает текст.
Предположим что мы набрали значение "Cat". Тогда после отправки формы этот див станет таким:

<div data-editable-target="name">
  Cat
</div>
Если значение стирается, то тогда текст меняется на первоначальный (и добавляется курсив),
такой какой он был до любых изменений:

<div data-editable-target="name"><i>name</i></div>
<div data-editable-target="email"><i>email</i></div>

src/application.js
Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику. По необходимости создайте
дополнительные функции на уровне модуля.

Подсказки
Каждое поле обрабатывается независимо и каждому понадобится свое собственное состояние.
Код отвечающий за изменение DOM не может менять состояние.
Обработчики не могут напрямую менять DOM. Это делает функция render. */

/* eslint-disable no-param-reassign */

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
// END

// Замыкание
// https://ru.hexlet.io/topics/42731