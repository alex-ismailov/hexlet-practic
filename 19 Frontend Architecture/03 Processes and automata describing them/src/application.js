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