/* 
  Реализуйте и экспортируйте по умолчанию функцию get,
  которая извлекает из массива элемент по указанному индексу,
  если индекс существует, либо возвращает значение по умолчанию.
  Функция принимает на вход три аргумента:

  Массив, Индекс, Значение по умолчанию (равно null)
  Примеры:
  const cities = ['moscow', 'london', 'berlin', 'porto'];

  get(cities, 1); // london
  get(cities, 4); // null
  get(cities, 10, 'paris'); // paris
*/

// const get = (arr, index, defaultValue = null) => {
//   if (index >= 0 && index < arr.length) {
//     return arr[index];
//   }
//   return defaultValue;
// };

// teacher solution
const get = (arr, index, defaultValue = null) => {
  if (arr[index] === undefined) {
    return defaultValue;
  }
  return arr[index];
};
// testing
const cities = ['moscow', 'london', 'berlin', 'porto'];
console.log(get(cities, 1)); // london
console.log(get(cities, 4)); // null
console.log(get(cities, 10, 'paris')); // paris
console.log(get(cities, -1, 'oops'));