/* 
  Реализуйте и экспортируйте функцию по умолчанию,
  которая принимает на вход массив и число, которое задает размер чанка (куска).
  Функция должна вернуть массив, состоящий из чанков указанной размерности.

  chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]

  chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
*/

const chunk = (arr, chunkSize) => {
  const res = [];
  let end = chunkSize;
  for (let begin = 0; begin < arr.length; begin = end, end += chunkSize) {
    res.push(arr.slice(begin, end));
  }
  return res;
};

// teacher solution
// const chunk = (arr, chunkSize) => {
//   const res = [];
//   for (let begin = 0; begin < arr.length; begin += chunkSize) {
//     res.push(arr.slice(begin, begin + chunkSize));
//   }
//   return res;
// };

// testing
const arr1 = ['a', 'b', 'c', 'd'];
console.log(chunk(arr1, 3)); // [['a', 'b', 'c'], ['d']]
console.log(chunk(arr1, 2)); // [['a', 'b'], ['c', 'd']]
const arr2 = [];
console.log(chunk(arr2, 4));
const arr3 = ['a'];
console.log(chunk(arr3, 2));
const arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(chunk(arr4, 2));
