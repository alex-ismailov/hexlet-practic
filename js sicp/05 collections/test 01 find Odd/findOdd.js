/* findOdd.js
Дан массив чисел. Каждое число в массиве встречается четное количество раз, кроме одного.

Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел и возвращает число,
которое встречается нечетное количество раз.

const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];
*/

/* eslint no-bitwise: ["error", { "allow": ["^"] }] */
const findOdd = (coll) => {
  if (coll.length === 0) {
    return 0;
  }
  const [first, ...rest] = coll;
  return first ^ findOdd(rest);
};

export default findOdd;

/* teacher solution */
// const findOdd = (coll) => coll.reduce((acc, item) => acc ^ item, 0);

/* testing */
const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];
console.log(findOdd(numbers)); // 5
