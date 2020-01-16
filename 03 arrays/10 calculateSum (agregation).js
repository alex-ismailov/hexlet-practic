/* 
  Реализуйте и экспортируйте по умолчанию функцию calculateSum,
  которая высчитывает сумму всех элементов массива,
  которые делятся без остатка на 3 (три).

  Примеры
  const coll1 = [8, 9, 21, 19, 18, 22, 7];
  calculateSum(coll1); // 48

  const coll2 = [2, 0, 17, 3, 9, 15, 4];
  calculateSum(coll2); // 27
  В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):

  const coll = [];
  calculateAverage(coll); // null 
*/

const calculateSum = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  for (const elem of arr) {
    if (elem % 3 === 0) {
      sum += elem;
    }
  }
  return sum;
};

// testing
const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(coll2)); // 27

const coll = [];
console.log(calculateSum(coll)); // null

/* Приветсвую, в задание есть небольшая опечатка, в случае обработки пустого массива, указана функция из предыдущего задания:

``` const coll = []; ```

``` calculateAverage(coll); // null ``` <--- я так понимаю здесь подразумевается вызов calculateSum. */