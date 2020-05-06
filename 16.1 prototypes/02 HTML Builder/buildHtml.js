// Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает строковое представление html.

// Пример
/* import buildHtml from './solution';

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

// buildHtml(data);
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

const mapping = {
  Array: (args) => args.map(buildHtml).join(''),
  Object: (arg) => {
        const entr = Object.entries(arg);
        return entr.map(([prop, value]) => ` ${prop}="${value}"`).join('');
      },
  String: (arg) => arg,
};
const buildHtml = (tree) => {
  const [nodeName, ...restArgs] = tree;

  let content = '';
  let options = '';
  restArgs.forEach((arg) => {
    content = mapping[arg.constructor.name](arg);
    // options = mapping[arg.constructor.name](arg);
  });

  return `<${nodeName}${options}>${content}</${nodeName}>`;
};

/* testing */
const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder, example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

console.log(buildHtml(data));












// const buildHtml = (tree) => {
//   const [nodeName, ...restArgs] = tree;
//   let options = '';
//   const content = restArgs.map((arg) => {
//     if (typeof arg === 'string') {
//       return arg;
//     }
//     if (arg instanceof Array) {
//       return arg.map(buildHtml).join('');
//     }
//     if (arg instanceof Object) {
//       const entr = Object.entries(arg);
//       options = entr.map(([prop, value]) => ` ${prop}="${value}"`).join('');
//       return '';
//     }
//   });
//   return `<${nodeName}${options}>${content.join('')}</${nodeName}>`;
// };