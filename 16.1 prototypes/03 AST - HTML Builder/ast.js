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

const parseDsl = (dsl) => {
  console.log(dsl);
  const [nodeName, ...restArgs] = dsl;

  const template = {
    name: nodeName,
    attributes: {},
    body: '',
    children: [],
  };

  return restArgs.reduce((acc, arg) => {
    if (arg instanceof Array) {
      const res = arg.map(parseDsl);
      return { ...acc, children: res };
    }
    if (arg instanceof Object) {
      return { ...acc, attributes: arg }
    }
    return { ...acc, body: arg }
  }, template);
};

const renderAST = (ast) => {
  const attrs = Object.keys(ast.attributes)
    .map((key) => ` ${key}="${ast.attributes[key]}"`).join('');
  const children = ast.children.map(renderAST).join('');

  return `<${ast.name}${attrs}>${ast.body}${children}</${ast.name}>`;
};

export default {
  parse(data) {
    return parseDsl(data);
  },
  render(ast) {
    return renderAST(ast);
  },
};
