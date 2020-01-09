import { l, isEmpty, cons, reduce, has, reverse, toString as listToString, concat } from '@hexlet/pairs-data';

/* 
  Напишите и экспортируйте по умолчанию функцию union,
  которая принимает на вход два списка и возвращает третий,
  являющийся объединением уникальных значений двух исходных списков.

  const list1 = l(2, 3, 2, 1, 7);
  const list2 = l(1, 5, 3, 5, 8, 9);
  const result = union(list1, list2); // (2, 3, 1, 7, 5, 8, 9)
  Подсказки:
  Порядок уникальных значений в итоговом списке должен соответствовать
  порядку появления этих значений в исходных списках 
  (сначала в первом переданном списке, потом - во втором).
*/

const union = (list1, list2) => {
  const newList = concat(list1, list2);
  const isUnique = (item, acc) => (has(acc, item)) ? acc : cons(item, acc);
  return reverse(reduce(isUnique, l(), newList));
};

// Teacher solution
// const union = (list1, list2) => {
//   const res = reduce(
//     (item, acc) => (has(acc, item)) ? acc : cons(item, acc),
//     l(),
//     concat(list1, list2),
//   );
//   return reverse(res);
// };

// testing
const list1 = l(2, 3, 2, 1, 7);
const list2 = l(1, 5, 3, 5, 8, 9);
console.log(listToString(union(list1, list2)));

const list3 = l();
const list4 = l();
console.log(listToString(union(list3, list4)));

const list5 = l(1, 5, 3, 5, 8, 9);
const list6 = l(2, 3, 2, 1, 7);
console.log(listToString(union(list5, list6)));

const list7 = l(2, 3, 2, 1, 7);
const list8 = l(1, 5, 3, 5, 8, 9);
console.log(listToString(union(list7, list8)));