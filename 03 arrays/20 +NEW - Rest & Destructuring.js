/* arrays.js
Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.

Примеры
import { getMax } from '../arrays.js';

// Для пустого массив возвращается null
getMax([]); // null
getMax([1, 10, 8]); // 10
Эта функция реализуется просто и мы уже делали подобное ранее. Сейчас же мы учимся использовать rest-оператор.
Используйте его вместе с деструктуризацией, для извлечения первого элемента и всех остальных.
Первый элемент становится начальным значением максимального, а остальные перебираются в цикле для определения максимального. */

/* eslint-disable import/prefer-default-export, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// @ts-check

// BEGIN (write your solution here)
const getMax = (nums) => {
  if (nums.length === 0) {
    return null;
  }
  let [max, ...rest] = nums;
  for (const num of rest) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const getMaxRecursive = (numsForInspect) => {
  if (numsForInspect.length === 0) {
    return null;
  }
  const iter = (nums, max) => {
    if (nums.length === 0) {
      return max;
    }
    const [first, ...rest] = nums;
    if (first > max) {
      max = first;
    }
    return iter(rest, max);
  };

  const [first, ...rest] = numsForInspect;

  return iter(rest, first);
};
// END

/* testing */
console.log(getMax([])); // null
console.log(getMax([1, 10, 8])); // 10
console.log(getMaxRecursive([])); // 10
console.log(getMaxRecursive([1, 10, 8])); // 10
