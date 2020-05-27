/* normalize.js
Реализуйте и экспортируйте по умолчанию функцию normalize, которая нормализует имена классов для
всех элементов на странице. В данном случае это означает, что происходит преобразование всех классов,
написанных с использованием kebab нотации, в camelCase нотацию: text-center => textCenter

Попробуйте решить эту задачу без использования регулярных выражений.

// <body>
//   <div class="text-center row-b">Bam</div>
// </body>
normalize(document);
console.log(document.body.innerHTML);
// <body>
//   <div class="textCenter rowB">Bam</div>
// </body>
Подсказки
Самый простой способ найти все элементы в документе это document.body.getElementsByTagName('*')
Приведение к camelCase https://lodash.com/docs#camelCase
Замена классов replace у объекта classList */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { camelCase } from 'lodash';

// BEGIN (write your solution here)
// const normalize = (doc) => {
//   const elements = doc.getElementsByTagName('*');
//   [...elements].forEach((el) => {
//     [...el.classList].forEach((className) => {
//       el.classList.replace(className, camelCase(className));
//     });
//   });
// };

export default normalize;
// END
