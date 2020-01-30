/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и
возвращает новый, состоящий из элементов, у которых такая же чётность,
как и у первого элемента входного массива. */

const isEven = (n) => n % 2 === 0;

const sameParity = (arr) => (
  arr.filter((num) => isEven(arr[0]) === isEven(num))
);

/* testing */
console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []
