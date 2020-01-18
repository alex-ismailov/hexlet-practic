/* 
  Реализуйте и экспортируйте по умолчанию функцию getSameCount,
  которая считает количество общих уникальных элементов для двух массивов. 
  Аргументы: Первый массив, Второй массив
  Примеры:
  getSameCount([], []); // 0
  getSameCount([4, 4], [4, 4]); // 1
  getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
  getSameCount([1, 3, 2, 2], [3, 1, 1, 2]); // 3
  Подсказки
  Для получения уникальных значений массива используйте uniq из библиотеки lodash.
*/

import { uniq } from 'lodash';

const getSameCount = (arr1, arr2) => {
  const uniqArr1 = uniq(arr1);
  const uniqArr2 = uniq(arr2);
  let count = 0;
  for (const item of uniqArr1) {
    count += uniqArr2.includes(item) ? 1 : 0;
  }
  return count;
};

// teacher soulution
// const getSameCount = (arr1, arr2) => {
//   const uniqArr1 = uniq(arr1);
//   const uniqArr2 = uniq(arr2);
//   let count = 0;
//   for (const item1 of uniqArr1) {
//     for (const item2 of uniqArr2) {
//       if (item1 === item2) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };

// testing
console.log(getSameCount([], [])); // 0
console.log(getSameCount([4, 4], [4, 4])); // 1
console.log(getSameCount([1, 10, 3], [10, 100, 35, 1])); // 2
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2])); // 3