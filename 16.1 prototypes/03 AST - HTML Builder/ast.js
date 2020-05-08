/* Текущая версия htmlBuilder должна уметь работать с одиночными тегами.
Список тегов, которые являются одиночными, находится в singleTagsList.

Пример:

// <br>
['br'];

// <img src="/path">
['img', { src: '/path' }];

solution.js
Реализуйте и экспортируйте функции parse и render.

Функция render принимает на вход ast и возвращает строковое представление.
Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.
const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);

{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]}

*/

import _ from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);
const subtypeHandler = {
  Array: (args) => ({ children: args.map(parse) }),
  Object: (arg) => ({ attributes: arg }),
  String: (arg) => ({ body: arg }),
};

const parse = (dsl) => {
  const [nodeName, ...restArgs] = dsl;

  const template = {
    name: nodeName,
    attributes: {},
    body: '',
    children: [],
  };
  return restArgs.reduce((acc, arg) => {
    const type = arg.constructor.name;
    return { ...acc, ...subtypeHandler[type](arg) };
  }, template);
};

const render = (ast) => {
  const attrs = Object.keys(ast.attributes)
    .map((key) => ` ${key}="${ast.attributes[key]}"`).join('');
  const children = ast.children.map(render).join('');

  return singleTagsList.has(ast.name)
    ? `<${ast.name}${attrs}>`
    : `<${ast.name}${attrs}>${ast.body}${children}</${ast.name}>`;
};

export {
  parse, render,
};
