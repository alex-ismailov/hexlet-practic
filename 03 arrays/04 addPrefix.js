/* 
  Реализуйте и экспортируйте по умолчанию функцию,
  которая принимает на вход массив и строковой префикс,
  и возвращает новый массив, в котором к каждому элементу
  исходного массива добавляется переданный префикс. 
  Функция предназначена для работы со строковыми элементами. 
  После префикса автоматически добавляется пробел.

  import addPrefix from './arrays';

  const names = ['john', 'smith', 'karl'];

  const newNames = addPrefix(names, 'Mr');
  console.log(newNames);
  // => ['Mr john', 'Mr smith', 'Mr karl'];

  console.log(names); // Старый массив не меняется!
  const names = ['john', 'smith', 'karl'];
*/

const addPrefix = (names, prefix) => {
  const newArr = [];
  for (let i = 0; i < names.length; i += 1) {
    newArr.push(`${prefix} ${names[i]}`);
  }
  return newArr;
};

// teacher solution
// const addPrefix = (names, prefix) => {
//   const newArr = [];
//   for (let i = 0; i < names.length; i += 1) {
//     newArr[i] = `${prefix} ${names[i]}`;
//   }
//   return newArr;
// };

// testing
const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mr');
console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];
console.log(names); // Старый массив не меняется!
// const names = ['john', 'smith', 'karl'];