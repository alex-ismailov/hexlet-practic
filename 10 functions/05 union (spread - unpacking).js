/* 
  Реализуйте и экспортируйте по умолчанию функцию union(...arrays),
  которая находит объединение всех переданных массивов.
  Функция принимает на вход от одного массива и больше.
  Результирующий массив должен содержать только уникальные элементы
  всех переданных массивов.

  Примеры использования
  union([3]); // [3]
  union([3, 2], [2, 2, 1]); // [3, 2, 1]
  union(['a', 3, false], [true, false, 3], [false, 5, 8]); // ['a', 3, false, true, 5, 8]
  Объединение работает только для плоских массивов,
  то есть массивов внутри которых нет других массивов.

  Подсказки
  Используйте метод concat для соединения массивов.
  С работой данного метода можно ознакомиться в документации.
  Для получения уникальных значений массива используйте функцию uniq из библиотеки lodash.
  Ознакомиться с работой данной функции можно на странице документации библиотеки.
*/

import { uniq } from 'lodash';

/* version 1 */
// export default (...arrays) => {
//   const res = [];
//   for (const subArr of arrays) {
//     res.push(...subArr);
//   }
//   return uniq(res);
// };

/* version 2 */
// const union = (...arrays) => {
//   let res = [];
//   for (const subArr of arrays) {
//     res = res.concat(subArr);
//   }
//   return uniq(res);
// };

/* version 3 */
// const union = (...arrays) => {
//   const res1 = []; 
//   return uniq(res1.concat(...arrays));
// };

/* version 4 */
const union = (...arrays) => uniq([].concat(...arrays));

/* teacher solution */
// export default (first, ...rest) => {
//   const concated = first.concat(...rest);
//   return uniq(concated);
// };

/* testing */
console.log(union([3])); // [3]
console.log(union([3, 2], [2, 2, 1])); // [3, 2, 1]
console.log(union(['a', 3, false], [true, false, 3], [false, 5, 8])); // ['a', 3, false, true, 5, 8]

// const array1 = [];
// const array2 = ['d', 'e', 'f'];
// console.log(array1.concat(array2));