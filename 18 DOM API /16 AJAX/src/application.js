/* Задача этого упражнения состоит в том чтобы реализовать автокомплит по странам.
На странице присутствует элемент input, с аттрибутами data-autocomplete и data-autocomplete-name,
к которому нужно привязаться. Атрибут data-autocomplete содержит ссылку, по которой нужно делать запрос на данные.
Атрибут data-autocomplete-name содержит имя, по которому необходимо найти на странице список ul с точно таким же
аттрибутом и значением. В этом списке выводятся данные.

src/application.js
Реализуйте автокомплит по странам.

Как только в поле ввода появляется хотя бы один символ, необходимо выполнить запрос на сервер
с параметром term значением которого, будет строка введенная в input.
Сервер возвращает массив из стран (на английском языке).

Если этот массив не пустой, то нужно заполнить список (посмотреть его нахождение можно либо через public/index.html
  либо открыв исходный код страницы в веб доступе) таким образом:

<ul data-autocomplete-name="country">
  <li>pakistan</li>
  <li>panama</li>
  <li>paraguay</li>
</ul>

Если с сервера пришел пустой список то нужно вывести:

<ul data-autocomplete-name="country">
  <li>Nothing</li>
</ul>

Подсказки
Для формирования правильного запроса на сервер, используйте URL
Текущий хост можно извлечь так window.location.origin
Значение поля input необходимо брать из события так: e.target.value
Используйте async/await
Ваш код должен работать даже в том случае если на странице множество автокомплитов
Используйте событие input */


// export default () => {
//   // BEGIN (write your solution here)
//   const inputField = document.querySelector('input[data-autocomplete-name]');

//   inputField.addEventListener('input', async (e) => {
//     const link = e.target.getAttribute('data-autocomplete');

//     const url = new URL(link, window.location.origin);
//     url.searchParams.append('term', e.target.value);

//     const [...response] = await fetch(url).then((r) => r.json());

//     const name = e.target.getAttribute('data-autocomplete-name');
//     const ul = document.querySelector(`ul[data-autocomplete-name="${name}"]`);

//     if (response.length === 0) {
//       const li = document.createElement('li');
//       li.textContent = 'Nothing';
//       ul.innerHTML = li.outerHTML;
//       return;
//     }

//     const countries = response.map((country) => {
//       const li = document.createElement('li');
//       li.innerHTML = country;
//       return li.outerHTML;
//     });

//     ul.innerHTML = countries.join('');
//   });
//   // END
// };

export default () => {
  // BEGIN (write your solution here)
  const inputFields = document.querySelectorAll('input[data-autocomplete-name]');

  inputFields.forEach((inputField) => {
    inputField.addEventListener('input', async (e) => {
      const link = e.target.getAttribute('data-autocomplete');

      const url = new URL(link, window.location.origin);
      url.searchParams.append('term', e.target.value);

      const [...response] = await fetch(url).then((r) => r.json());

      const name = e.target.getAttribute('data-autocomplete-name');
      const ul = document.querySelector(`ul[data-autocomplete-name="${name}"]`);

      if (response.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nothing';
        ul.innerHTML = li.outerHTML;
        return;
      }

      const countries = response.map((country) => {
        const li = document.createElement('li');
        li.innerHTML = country;
        return li.outerHTML;
      });

      ul.innerHTML = countries.join('');
    });
  });
  // END
};

/* teacher solution */
export default () => {
  // BEGIN
  const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
  autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
      const url = new URL(route, window.location.origin);
      url.searchParams.append('term', e.target.value);
      // const response = await fetch(url);
      // const items = await response.json();
      const [...items] = await fetch(url).then((r) => r.json());
      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
      list.innerHTML = listHTML;
    });
  });
  // END
};
