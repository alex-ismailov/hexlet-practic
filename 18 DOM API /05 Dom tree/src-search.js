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
//   console.log();
//   const elems = doc.documentElement.children;
//   const arr = [...elems];

//   return arr.reduce((acc, elem) => {
//     console.log(`elem.tagName: ${elem.tagName}`);
//     console.log(`tag: ${tag}`);
//     if (elem.tagName === tag.toUpperCase()) {
//       console.log('MATCH!!!');
//       return [...acc, elem];
//     }
//     console.log('NO MATCH!!!!');
//     return acc;
//   }, []);
// };

// const search = (doc, tag) => {
//   console.log(doc);
//   const res = [];
//   const root = doc.documentElement;
//   console.log(root);
  
//   if (root.tagName === tag.toUpperCase()) {
//     res.push(root);
//   }

//   const rootChildren = [...root.children];
//   // console.log(rootChildren); // [ HTMLHeadElement {}, HTMLBodyElement {} ]
//   if (rootChildren.length > 0) {
//     return [...res, ...rootChildren.reduce((acc, el) => [...acc, ...search(el, tag)], [])];
//   }

//   return res;
// };
// console.log 18 DOM API /05 Dom tree/src-search.js:40
// Document { location: [Getter/Setter] }

// console.log 18 DOM API /05 Dom tree/src-search.js:43
// HTMLHtmlElement {}

// console.log 18 DOM API /05 Dom tree/src-search.js:40
// HTMLHeadElement {}

// console.log 18 DOM API /05 Dom tree/src-search.js:43
// undefined

// const search = (doc, tag) => {
//   const elements = [...doc.children];
//   return elements.reduce((acc, el) => {
//     if (el.tagName === tag.toUpperCase()) {
//       return [...acc, el];
//     }
//     return acc
//   }, []);
// };

const search = (doc, tag) => {
  console.log(doc);
  const elements = [...doc.children];
  return elements.reduce((acc, el) => {
    console.log(el.tagName);
    if (el.tagName === tag.toUpperCase()) {
      if (el.children.length > 0) {
        console.log('HAVE CHILDREN!!!');
        console.log(el.tagName);
        return [...acc, el, ...search(el, tag)];
      }
      return [...acc, el];
    }
    return acc
  }, []);
};

export default search;

