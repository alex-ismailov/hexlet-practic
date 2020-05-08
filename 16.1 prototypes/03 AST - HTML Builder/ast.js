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

import { identity } from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

export const render = (ast) => {
  const {
    name,
    attributes,
    body,
    children,
  } = ast;

  const attrs = Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');
  const content = children.length > 0 ? children.map(render).join('') : body;

  return singleTagsList.has(name)
    ? `<${name}${attrs}>`
    : `<${name}${attrs}>${content}</${name}>`;
};

const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
    process: identity,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

export const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  return rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
};
