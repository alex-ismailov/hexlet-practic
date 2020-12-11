# 2. HTML Builder Project

## solution.js

Реализуйте и экспортируйте по умолчанию функцию, которая возвращает строковое представление html.

### Примеры:
```
import buildHtml from './solution';

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
]];
```
```
buildHtml(data);
<html>
  <head>
    <title>hello, hexlet!</title>
  </head>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>
```

### Подсказки

* Для объединения массива в строку, используйте метод join(separator).

Решение учителя может повергнуть вас в шок. Оно не содержит ничего нового по сравнению с тем что вы проходили, но по максимуму использует пройденные идеи, функции высшего порядка, неизменяемость, полиморфизм. Потратьте время, разберитесь с ним.
