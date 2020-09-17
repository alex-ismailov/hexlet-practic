## 06 Declarative DOM Search

В этом упражнении похожая задачка на предыдущую, но теперь мы будем использовать поисковые методы, без прямого обхода дерева.

Структура данных, которые надо извлечь, фиксирована. Мы будем парсить страницу категории статей. Эта страница содержит заголовок категории, его описание и ссылки на статьи с небольшим описанием. Эта структура фиксирована, меняется только количество статей от категории к категории.

### src/extractor.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход `document.documentElement`, извлекает из него данные и возвращает объект нужной структуры.

```
<div class="content">
  <h1>Category Name</h1>
  <div class="description">Description</div>
  <div class="links">
    <div>
      <h2><a href="#">Article Name 1</a></h2>
      <p>Article Description 1</p>
    </div>
    <div>
      <h2><a href="#">Article Name 2</a></h2>
      <p>Article Description 1</p>
    </div>
  </div>
</div>
```

```
import extractData from './extractor.js';

const data = extractData(document.documentElement);
console.log(data);
// {
//   title: 'Category Name',
//   description: 'Description',
//   items: [
//     { title: 'Article Name 1', description: 'Article Description 1' },
//     { title: 'Article Name 2', description: 'Article Description 2' }
//   ]
// }
```

### src/index.js

Проверьте как работает вновь созданная функция на странице доступной в веб-доступе. Импортируйте функцию в `index.js`, выполните ее с аргументом `document.documentElement` и распечатайте результат в консоль. Проверьте что в консоль вывелись нужные данные.

##### Подсказки

* Не стесняйтесь выполнять querySelector на любые данные
* Для выборки списка статей используйте querySelectorAll
* [Разделение чтения и использования](https://ru.hexlet.io/blog/posts/sovershennyy-kod-razdelenie-polucheniya-i-ispolzovaniya)
