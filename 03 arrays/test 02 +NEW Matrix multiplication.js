/* Операция умножения двух матриц А и В представляет собой вычисление результирующей матрицы С,
где каждый элемент C(ij) равен сумме произведений элементов в соответствующей строке первой матрицы A(ik) и
элементов в столбце второй матрицы B(kj).

Две матрицы можно перемножать только в том случае, если количество столбцов в первой матрице
совпадает с количеством строк во второй матрице. Это значит, что первая матрица обязательно должна быть
согласованной со второй матрицей. В результате операции умножения матрицы размера M×N на матрицу
размером N×K является матрица размером M×K.

matrix.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает две матрицы и
возвращает новую матрицу — результат их произведения.

Примеры
import multiply from './matrix.js';

const matrixA = [[1, 2], [3, 2]];
const matrixB = [[3, 2], [1, 1]];

multiply(matrixA, matrixB);
// [[5, 4], [11, 8]]

const matrixC = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const matrixD = [
  [1, 2, 1],
  [0, 1, 0],
];

multiply(matrixC, matrixD);
// [
//   [2, 9, 2],
//   [6, 19, 6],
//   [1, 10, 1],
// ]
Подсказки
Описание алгоритма перемножения матриц.
Демонстрация операции перемножения матриц. */

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
// export default (A, B) => A.map((row, i) => B[0].map((_, j) => row.reduce((acc, _, n) => acc + A[i][n] * B[n][j], 0)));

// const multiplyMatrix = (m1, m2) => m1.map((row, i) => m2[0].map((_, j) => row.reduce((acc, _, n) => acc + m1[i][n] * m2[n][j], 0)));

const multiplyMatrix = (m1, m2) => m1.map(
  (m1Row, m1RowIndex) => m2[0].map(
    (m2Col, m2ColIndex) => m1Row.reduce(
      (acc, m1Col, m1ColIndex) => acc + m1[m1RowIndex][m1ColIndex] * m2[m1ColIndex][m2ColIndex],
      0,
    ),
  ),
);
// END

/* testing */
const m1 = [[1, 2], [3, 2]];
const m2 = [[3, 2], [1, 1]];

const m11 = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const m22 = [
  [1, 2, 1],
  [0, 1, 0],
];

console.log(multiplyMatrix(m1, m2)); // [ [ 5, 4 ], [ 11, 8 ] ]
console.log(multiplyMatrix(m11, m22));
