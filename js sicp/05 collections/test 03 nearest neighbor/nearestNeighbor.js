/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число.
Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу,
то возвращается наименьший из индексов ближайших чисел.

Примеры
findIndexOfNearest([], 2);              // null
findIndexOfNearest([15, 10, 3, 4], 0);  // 2
findIndexOfNearest([7, 5, 3, 2], 4);    // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2 */

// const findIndexOfNearest = (coll, num) => {
//   return coll.reduce((currentIndex, item, index, srcArr) => {
//     const diff = Math.abs(num - item);
//     currentIndex = diff < currentIndex ? diff : currentIndex;
//     return currentIndex;
//   });
// };

const findIndexOfNearest = (coll, num) => {
  if (coll.length === 0) {
    return null;
  }
  const diffs = coll.map((el) => Math.abs(num - el));
  const minDiff = Math.min(...diffs);
  const minDiffIndex = diffs.indexOf(minDiff);

  return minDiffIndex;
};

export default findIndexOfNearest;

/* testing */
// console.log(findIndexOfNearest([7, 5, 3, 2], 4));  // 1
// console.log(findIndexOfNearest([], 2));            // null
