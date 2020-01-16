/* 
  Реализуйте функцию getSameParity, которая принимает на вход массив чисел
  и возвращает новый, состоящий из элементов, у которых такая же чётность,
  как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.

  Примеры
  getSameParity([]);        // []
  getSameParity([1, 2, 3]); // [1, 3]
  getSameParity([1, 2, 8]); // [1]
  getSameParity([2, 2, 8]); // [2, 2, 8]
  Подсказки
  Проверка чётности - остаток от деления: item % 2 === 0 — чётное число
  Если на вход функции передан пустой массив, то она должна вернуть пустой массив. 
*/

const getSameParity = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  const res = [];
  const firstValue = arr[0];
  const isEven = (value) => value % 2 === 0;
  const isRightValue = (currentValue) => isEven(firstValue) === isEven(currentValue);
  for (const item of arr) {
    if (isRightValue(item)) {
      res.push(item);
    }
  }
  return res;
};

// teacher solution
// const getSameParity = (coll) => {
//   if (coll.length === 0) {
//     return [];
//   }
//   const result = [];
//   const remainder = coll[0] % 2;
//   for (const item of coll) {
//     if (item % 2 === remainder) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// testing
console.log(getSameParity([]));        // []
console.log(getSameParity([1, 2, 3])); // [1, 3]
console.log(getSameParity([1, 2, 8])); // [1]
console.log(getSameParity([2, 2, 8])); // [2, 2, 8]
