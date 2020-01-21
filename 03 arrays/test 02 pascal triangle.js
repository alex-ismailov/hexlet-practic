/* 
  Треугольник Паскаля — бесконечная таблица биномиальных коэффициентов, имеющая треугольную форму.
  В этом треугольнике на вершине и по бокам стоят единицы.
  Каждое число равно сумме двух расположенных над ним чисел.
  Строки треугольника симметричны относительно вертикальной оси.

  0:      1
  1:     1 1
  2:    1 2 1
  3:   1 3 3 1
  4:  1 4 6 4 1

  Напишите функцию generate, которая возвращает указанную строку треугольника паскаля в виде массива.
  Экспортируйте функцию по умолчанию.

  Пример:
  generate(1); // [1, 1]
  generate(4); // [1, 4, 6, 4, 1]
*/

const factorial = (n) => {
  const iter = (counter, acc) => {
    if (counter > n) {
      return acc;
    }
    return iter(counter + 1, acc * counter);
  };
  return iter(1, 1);
};

// !row / (!column * !(row - column))
// const generate = (row) => {
//   const resRow = [];
//   const ROW_FACT = factorial(row);
//   for (let column = 0; column <= row; column += 1) {
//     const elem = ROW_FACT / (factorial(column) * factorial(row - column));
//     resRow.push(elem);
//   }
//   return resRow;
// };

// teacher solution
const generate = (rowNumber) => {
  let currentRow = [1];
  for (let i = 0; i <= rowNumber; i += 1) {
    const newRow = [];
    for (let j = 0; j <= i; j += 1) {
      const first = currentRow[j - 1] || 0;
      const second = currentRow[j] || 0;
      newRow[j] = first + second;      
    }
    currentRow = newRow;
  }
  return currentRow;
};

// testing

// console.log(generate(0));
// console.log(generate(1));
// console.log(generate(2));
// console.log(generate(3));
// console.log(generate(4));
// console.log([1]);
