/*
  Реализуйте и экспортируйте по умолчанию функцию average,
  которая возвращает среднее арифметическое всех переданных аргументов.
  Если функции не передать ни одного аргумента, то она должна вернуть null.

  Примеры использования
  console.log()average(0); // 0
  console.log()average(0, 10); // 5
  console.log()average(-3, 4, 2, 10); // 3.25
  console.log()average(); // null
  Подсказки: Используйте функцию sum из библиотеки lodash.
*/

import { sum } from 'lodash';

const average = (...args) => {
  const argsAmount = args.length;
  const res = (argsAmount ? (sum(args) / argsAmount) : null);
  return res;
};

/* testing */
console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null
