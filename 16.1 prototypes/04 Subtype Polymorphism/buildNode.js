/* buildNode.js
Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа.
Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.

PairedTag.js
Реализуйте тип PairedTag со следующим интерфейсом:
- Конструктор, который принимает на вход: name, attributes, body, children.
- Метод toString, который возвращает текстовое представление узла (html) на всю глубину.

SingleTag.js
Реализуйте тип SingleTag со следующим интерфейсом:
- Конструктор, который принимает на вход: name, attributes
- Метод toString, который возвращает текстовое представление узла (html) на всю глубину.

Обратите внимание на то что у SingleTag нет body и children */

import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const singleTagsList = new Set(['hr', 'img', 'br']);

// export default (name, attributes, body, children) => (
//   singleTagsList.has(name)
//     ? new SingleTag(name, attributes)
//     : new PairedTag(name, attributes, body, children)
// );

/* teacher solution */
export default (name, ...rest) => {
  const CurrentClass = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new CurrentClass(name, ...rest);
};
// END
