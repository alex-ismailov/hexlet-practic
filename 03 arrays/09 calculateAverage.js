/* 
  Реализуйте и экспортируйте по умолчанию функцию calculateAverage,
  которая высчитывает среднее арифметическое элементов массива.
  Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :)

  Примеры
  const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
  calculateAverage(temperatures1); // 38.5

  const temperatures2 = [36, 37.4, 39, 41, 36.6];
  calculateAverage(temperatures2); // 38
  В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):

  const temperatures = [];
  calculateAverage(temperatures); // => null 
*/

const calculateAverage = (arr) => {
  const size = arr.length;
  if (size === 0) {
    return null;
  }
  let totalTemp = 0;
  for (const temp of arr) {
    totalTemp += temp;
  }
  return totalTemp / size;
};

// testing
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1)); // 38.5

const temperatures2 = [36, 37.4, 39, 41, 36.6];
console.log(calculateAverage(temperatures2)); // 38

const temperatures = [];
console.log(calculateAverage(temperatures));
