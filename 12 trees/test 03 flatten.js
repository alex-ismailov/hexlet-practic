/* Реализуйте и экспортируйте по умолчанию функцию flatten, которая
делает плоским вложенный массив.

const list = [1, 2, [3, 5], [[4, 3], 2]];

flatten(list); // => // [1, 2, 3, 5, 4, 3, 2]
Подсказки
Array.isArray - проверяет является ли элемент массивом. */

// BEGIN
const flatten = (tree) => tree.reduce((acc, n) => {
  const res = Array.isArray(n)
    ? [...acc, ...flatten(n)]
    : [...acc, n];
  return res;
}, []);
// END

/* testing */
const list = [1, 2, [3, 5], [[4, 3], 2]];
const flattenList = flatten(list);
console.log(flattenList);
