/* without.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и элементы,
которые должны отсутствовать в возвращаемом массиве.

without([2, 1, 2, 3], 1, 2, 5);
// → [3] */

// export default (coll, ...rest) => coll.filter((item) => !rest.includes(item));

/* teacher solution */
const without = (coll, ...rest) => {
  const set = new Set(rest);
  return coll.filter((num) => !set.has(num));
};

export default without;
