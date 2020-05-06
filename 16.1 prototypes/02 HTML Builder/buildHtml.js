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
const mapping2 = {
  Object: (arg) => {
    const keysValues = Object.keysValuesies(arg);
    const res = keysValues.map(([prop, value]) => ` ${prop}="${value}"`).join('');
    return res;
  },
};

const mapping = {
  Array: (args) => args.map(buildHtml).join(''),
  Object: (arg) => arg,
  String: (arg) => arg,
};

const buildHtml = (tree) => {
  const [nodeName, ...restArgs] = tree;

  const processdArgs = restArgs.map((arg) => mapping[arg.constructor.name](arg));
  const content = processdArgs.filter((el) => !(el instanceof Object));
  const props = processdArgs
    .filter((el) => el instanceof Object)
    .map((propObj) => {
      const keysValues = Object.entries(propObj);
      return keysValues.map(([key, value]) => ` ${key}="${value}"`).join('');
    });

  return `<${nodeName}${props}>${content}</${nodeName}>`;
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

//   let content = '';
//   let props = '';
//   restArgs.forEach((arg) => {
//     // console.log(arg);
//     // console.log(`arg.constructor.name: ${arg.constructor.name}`);
//     content += mapping[arg.constructor.name](arg);
//     // props = mapping.Object(arg);
//   });
  
//   // console.log(content);
//   return `<${nodeName}${props}>${content}</${nodeName}>`;
// };



// const buildHtml = (tree) => {
//   const [nodeName, ...restArgs] = tree;
//   let props = '';
//   const content = restArgs.map((arg) => {
//     if (typeof arg === 'string') {
//       return arg;
//     }
//     if (arg instanceof Array) {
//       return arg.map(buildHtml).join('');
//     }
//     if (arg instanceof Object) {
//       const keysValues = Object.keysValuesies(arg);
//       props = keysValues.map(([prop, value]) => ` ${prop}="${value}"`).join('');
//       return '';
//     }
//   });
//   return `<${nodeName}${props}>${content.join('')}</${nodeName}>`;
// };