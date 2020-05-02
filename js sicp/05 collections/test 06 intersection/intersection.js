/* intersection.js
Реализуйте и экспортируйте функцию по умолчанию, которая находит пересечение двух массивов.
Пересечение двух массивов A и B — это массив только с теми элементами A и B,
которые одновременно принадлежат обоим массивам, без дублей.

Обратите внимание, что порядок значений в пересечении должен соответствовать порядку появления этих значений в
исходных массивах (сначала в первом переданном массиве, потом - во втором).
*/

// const intersection = (coll1, coll2) => {
//   const uniqItems = Array.from(new Set(coll1));
//   const set = new Set(coll2);
//   return uniqItems.filter((item) => set.has(item));
// };

// const intersection = (coll1, coll2) => {
//   const filtered = coll1.filter((item) => coll2.includes(item));
//   return filtered.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), []);
// };

const intersection = (coll1, coll2) => {
  const filtered = coll1.filter((item) => coll2.includes(item));
  return [...new Set(filtered)];
};

export default intersection;

/* testing */
// console.log(intersection([2, 1], [2, 3]));
// → [2]

// console.log(intersection([3, 1, 3], [3, 3, 2]));
// → [3]

// console.log(intersection(
//       ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
//       ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
//     ));
// → ['kirill', 'rakhim', 'alex', 'dima'] */
