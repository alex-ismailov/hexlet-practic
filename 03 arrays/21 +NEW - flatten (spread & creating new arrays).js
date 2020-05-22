/* Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его:
если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая каждый вложенный.

js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

import { flatten } from '../arrays.js';

// Для пустого массив возвращается []
console.log(flatten([]); // []
console.log(flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
console.log(flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
Реализуйте добавление элементов вложенного массива в результирующий через spread-оператор. */


/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const flattenDeep = (arr) => arr.reduce((acc, item) => {
  if (item instanceof Array) {
    return [...acc, ...flattenDeep(item)];
  }
  return [...acc, item];
}, []);

const flatten = (items) => items.reduce((acc, item) => {
  if (Array.isArray(item)) {
    return [...acc, ...item];
  }
  return [...acc, item];
}, []);
// END

console.log(flattenDeep([])); // []
console.log(flattenDeep([1, [3, 2], 9])); // [1, 3, 2, 9]
console.log(flattenDeep([1, [[2], [3]], [9]])); // [1, [2], [3], 9]

console.log(flatten([])); // []
console.log(flatten([1, [3, 2], 9])); // [1, 3, 2, 9]
console.log(flatten([1, [[2], [3]], [9]])); // [1, [2], [3], 9]
