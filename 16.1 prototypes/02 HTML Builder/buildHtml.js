// Реализуйте и экспортируйте по умолчанию функцию iter, которая возвращает строковое представление html.

// Пример
/* import iter from './solution';

const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]]; */

// iter(data);
//<html>
//  <head>
//    <title>hello, hexlet!</title>
//  </head>
//  <body class="container">
//    <h1 class="header">html builder example</h1>
//    <div>
//      <span>span text2</span>
//      <span>span text3</span>
//    </div>
//  </body>
//</html>

// BEGIN (write your solution here)
const buildHtml = (tree) => {
  const [nodeName, ...restArgs] = tree;

  const content = restArgs.filter((el) => typeof el === 'string').join('');
  const children = restArgs.filter((el) => el instanceof Array).flat().map(buildHtml).join('');
  const props = restArgs
    .filter((el) => el instanceof Object && !(el instanceof Array))
    .map((propObj) => {
      const keysValues = Object.entries(propObj);
      return keysValues.map(([key, value]) => ` ${key}="${value}"`).join('');
    }).join('');

  return `<${nodeName}${props}>${content}${children}</${nodeName}>`;
};
// END

/* testing */
// const data = ['html', [
//   ['head', [
//     ['title', 'hello, hexlet!'],
//   ]],
//   ['body', { class: 'container' }, [
//     ['h1', { class: 'header' }, 'html builder, example'],
//     ['div', [
//       ['span', 'span text2'],
//       ['span', 'span text3'],
//     ]],
//   ]],
// ]];

// console.log(buildHtml(data));
// <html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder, example</h1><div><span>span text2</span><span>span text3</span></div></body></html>
