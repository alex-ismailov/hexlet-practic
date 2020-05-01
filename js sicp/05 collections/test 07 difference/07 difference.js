/* difference.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход два массива, а
возвращает массив, составленный из элементов первого, которых нет во втором.

difference([2, 1], [2, 3]);
// → [1] */

// const differenceSlow = (coll1, coll2) => coll1.filter((element) => !coll2.includes(element));

const difference = (coll1, coll2) => {
  const set2 = new Set(coll2);
  return coll1.filter((element) => !set2.has(element));
};

export default difference;

// console.log(differenceSlow([2, 1], [2, 3])); // [ 1 ]
// console.log(difference([2, 1], [2, 3]));     // [ 1 ]
