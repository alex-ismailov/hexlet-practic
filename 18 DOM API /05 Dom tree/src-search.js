/* src/search.js
Реализуйте и экспортируйте по умолчанию функцию search, которая принимает на вход document и имя тега, а
возвращает массив из всех элементов соответствующих этому тегу.

// <body>
//   <p>1</p>
//   text
//   <div><p>2</p></div>
// </body>

const elements = search(document, 'p');
// ['<p>1</p>' '<p>2</p>'] где каждый элемент это объект соответствующего типа

console.log(elements.length); // 2
Это задание подразумевает тренировку работы с домом как с деревом, по этой причине большая просьба не использовать
реализацию на основе getElementsByTagName.

Подсказки
Имя тега соответствующего dom элементу, можно получить так: element.tagName
Более подробно варианты использования смотрите в тестах */

// const search = (doc, tag) => {
//   const elements = [...doc.children];
//   const flattenElements = elements.reduce((acc, e) => {
//     if (e.children.length > 0) {
//       return [...acc, e, ...search(e, tag)];
//     }
//     return [...acc, e];
//   }, []);

//   return flattenElements.filter((e) => e.tagName === tag.toUpperCase());
// };

const search = (doc, tag) => {
  const elements = [...doc.children];
  const flattenElements = elements.reduce((acc, e) => (
    e.children.length > 0
      ? [...acc, e, ...search(e, tag)]
      : [...acc, e]
  ), []);

  return flattenElements.filter((e) => e.tagName === tag.toUpperCase());
};

/* ****** teacher solution ****** */
// const search = (doc, tag) => {
//   const elements = [...doc.children];
//   const initAcc = elements.filter((el) => el.tagName === tag.toUpperCase());
//   return elements.reduce((acc, el) => [...acc, ...search(el, tag)], initAcc);
// };

export default search;
