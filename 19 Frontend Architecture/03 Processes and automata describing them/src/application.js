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
const buildForm = (nameOfInput) => {
  const form = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = nameOfInput;
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Save';
  form.append(nameInput, submit);

  return form.outerHTML;
};

const render = () => {};

const app = () => {
  const state = {
    registrationProcess: {
      state: 'disabled',
    }
  };

  const divs = document.querySelectorAll('div[data-editable-target]');
  divs.addEventListener('click', (currentTarget) => {
    console.log(currentTarget);
  });

  // console.log(divs);

};

const divs = document.querySelectorAll('div[data-editable-target]');
// console.log(divs);

export default app;
// END

// Замыкание
// https://ru.hexlet.io/topics/42731