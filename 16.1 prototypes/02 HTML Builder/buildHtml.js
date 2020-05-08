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
// <html>
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
// </html>

// BEGIN (write your solution here) version 2
const buildAttrsStr = (attrs) => (
  Object.keys(attrs).map((key) => ` ${key}="${attrs[key]}"`).join('')
);

const subtypeHandler = {
  Array: (args) => ({ children: args }),
  Object: (arg) => ({ attributes: arg }),
  String: (arg) => ({ body: arg }),
};

const buildHtml = (tree) => {
  const [nodeName, ...restArgs] = tree;

  const tagTemplate = {
    name: nodeName,
    attributes: {},
    body: '',
    children: [],
  };

  const tag = restArgs.reduce((acc, arg) => {
    const type = arg.constructor.name;
    return ({ ...acc, ...subtypeHandler[type](arg) });
  }, tagTemplate);

  return [`<${tag.name}${buildAttrsStr(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`].join('');
};
// END

/* ************ teacher solution ************** */
// Каждый элемент массива содержит имя свойства
// и функцию-предикат для определения типа этого свойства.
const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
  },
];

// Получаем имя свойства по его типу.
const getPropertyName = (arg) => {
  const obj = propertyActions.find(({ check }) => check(arg));
  return obj.name;
};

// Получаем имя свойства по его типу.
const buildAttrsString = (attrs) => (
  Object.keys(attrs).map((key) => ` ${key}="${attrs.key}"`).join('')
);

// Функция принимает на вход тег.
const buildHtmlTeacherSolution = (data) => {
  const [first, ...rest] = data;

  // Формируем представление тега в виде объекта.
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };

  // Обходим свойства тега.
  const tag = rest
    .reduce((acc, arg) => {
      // Получаем имя свойства.
      const name = getPropertyName(arg);
      // Добавляем свойство в представление тега.
      return { ...acc, [name]: arg };
    }, root);

  // Из представления тега формируем строку,
  // вызывая рекурсивно функцию buildHtml для каждого ребёнка.
  return [`<${tag.name}${buildAttrsString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`].join('');
};

export default buildHtml;
