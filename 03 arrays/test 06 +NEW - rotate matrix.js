/* matrix.js
Реализуйте и экспортируйте функции rotateLeft и rotateRight, которые поворачивают матрицу влево
(против часовой стрелки) и соответственно вправо (по часовой стрелке).

Матрица реализована на массивах.
Функции должны возвращать новую матрицу не изменяя исходную.
Примеры:
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

rotateLeft(matrix);
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

rotateRight(matrix);
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]
*/

// BEGIN (write your solution here)
// export const rotateLeft = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i])).reverse();
// export const rotateRight = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]).reverse());
// END

/* teacher solution */
// const rotate = (matrix, direction) => {
//   const rowsCount = matrix.length;
//   const [firstRow] = matrix;
//   const columnsCount = matrix[0].length;
//   const rotated = [];

//   for (let row = 0; row < columnsCount; row += 1) {
//     rotated[row] = [];
//     for (let column = 0; column < rowsCount; column += 1) {
//       rotated[row][column] = direction === 'left'
//         ? matrix[column][columnsCount - row - 1]
//         : matrix[rowsCount - column - 1][row];     
//     }
//   }

//   return rotated;
// };
// export const rotateLeft = (matrix) => rotate(matrix, 'left');
// export const rotateRight = (matrix) => rotate(matrix, 'right');

/* testing */
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

console.log(rotateLeft(matrix));
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

console.log(rotateRight(matrix));
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]

const matrix2 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 0, 1, 2],
  [3, 4, 5, 6, 7, 8],
  [9, 0, 1, 2, 3, 4],
];
console.log(rotateLeft(matrix2));
// const expected = [
//   [6, 2, 8, 4],
//   [5, 1, 7, 3],
//   [4, 0, 6, 2],
//   [3, 9, 5, 1],
//   [2, 8, 4, 0],
//   [1, 7, 3, 9],
// ];