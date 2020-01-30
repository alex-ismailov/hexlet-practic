/* Реализуйте функцию getDifference, которая принимает на вход два массива,
а возвращает массив, составленный из элементов первого, которых нет во втором.
Сделайте решение функциональным. */

// const getDifference = (arr1, coll2) => {
//   const mapped = coll.map((item) => {
//     console.log(item);
//     return item;
//   });

//   return mapped;
// };

/* отфильтровать элементы arr1 которые не входят в arr2 */
const getDifference = (arr1, arr2) => arr1.filter((itemArr1) => !arr2.includes(itemArr1));

// console.log([2, 1], [2, 3]);
console.log(getDifference([2, 1], [2, 3])); // [1]

