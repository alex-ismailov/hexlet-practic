/* Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива.
Если массив содержит меньше двух элементов, то он возвращается как есть.

import { swap } from '../itemss';

console.log(swap([])); // []
console.log(swap([1])); // [1]
console.log(swap([1, 2])); // [2, 1]
console.log(swap(['one', 'two', 'three'])); // ['three', 'two', 'one']
Подсказки
Чтобы поменять местами значения, нужно использовать третью переменную */

const swap = (array) => {
  const items = array.slice();
  if (items.length < 2) {
    return items;
  }

  const tmp = items[0];
  items[0] = items[items.length - 1];
  items[items.length - 1] = tmp;

  return items;
};

/* testing */
console.log(swap([])); // []
console.log(swap([1])); // [1]
console.log(swap([1, 2])); // [2, 1]
console.log(swap(['one', 'two', 'three'])); // ['three', 'two', 'one']
