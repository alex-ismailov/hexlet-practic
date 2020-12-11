# 3. Abstract syntax tree

Текущая версия htmlBuilder должна уметь работать с одиночными тегами. Список тегов, которые являются одиночными, находится в singleTagsList.

### Пример:
```
// <br>
['br'];

// <img src="/path">
['img', { src: '/path' }];
```

## solution.js
Реализуйте и экспортируйте функции `parse()` и `render()`.

* Функция `render()` принимает на вход ast и возвращает строковое представление.
* Функция `parse()` принимает на вход исходную структуру и возвращает представление в виде ast.

### Пример:
```
const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);
// =>
{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]}
```