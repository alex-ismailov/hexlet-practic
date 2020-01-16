/*
  Реализуйте и экспортируйте по умолчанию функцию swap,
  которая меняет местами два элемента относительно переданного индекса.
  Например, если передан индекс 5, то функция меняет местами элементы,
  находящиеся по индексам 4 и 6.

  Параметры функции: Массив, Индекс.
  Если хотя бы одного из индексов не существует, функция возвращает исходный массив.

  import swap from './arrays';

  const names = ['john', 'smith', 'karl'];
  const result = swap(names, 1);
  console.log(result); // => ['karl', 'smith', 'john']
  const result = swap(names, 2);
  console.log(result); // => ['john', 'smith', 'karl']
  const result = swap(names, 0);
  console.log(result); // => ['john', 'smith', 'karl']
*/

const swap = (arr, index) => {
  const localArr = arr;
  if (index <= 0 || index >= localArr.length - 1) {
    return localArr;
  }
  const tmp = localArr[index - 1];
  localArr[index - 1] = localArr[index + 1];
  localArr[index + 1] = tmp;
  return localArr;
};

// teacher solution
// const swap = (coll, center) => {
//   const lastIndex = coll.length - 1;
//   const isSwappable = (center > 0) && (center < lastIndex);

//   if (!isSwappable) {
//     return coll;
//   }

//   const prevIndex = center - 1;
//   const nextIndex = center + 1;

//   const temp = coll[prevIndex];
//   coll[prevIndex] = coll[nextIndex];
//   coll[nextIndex] = temp;

//   return coll;
// };

// testing
const names1 = ['john', 'smith', 'karl'];
const names2 = ['john', 'smith', 'karl'];
const names3 = ['john', 'smith', 'karl'];

const result1 = swap(names1, 1);
console.log(result1); // => ['karl', 'smith', 'john']
const result2 = swap(names2, 2);
console.log(result2); // => ['john', 'smith', 'karl']
const result3 = swap(names3, 0);
console.log(result3); // => ['john', 'smith', 'karl']
