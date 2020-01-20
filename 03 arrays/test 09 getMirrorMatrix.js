/* 
  Реализуйте и экспортируйте по умолчанию функцию getMirrorMatrix,
  которая принимает двумерный массив (матрицу) и возвращает массив,
  изменённый таким образом, что правая половина матрицы становится
  зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы.
  Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество
  столбцов всегда равно количеству строк.

  getMirrorMatrix([
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34],
    [41, 42, 43, 44],
  ]);

  //  [
  //     [11, 12, 12, 11],
  //     [21, 22, 22, 21],
  //     [31, 32, 32, 31],
  //     [41, 42, 42, 41],
  //  ] 
*/
const copyMatrix = (matrix) => {
  const newMatrix = [];
  for (const row of matrix) {
    newMatrix.push(row.slice());
  }
  return newMatrix;
};

const getMirrorMatrix = (matrix) => {
  const newMatrix = copyMatrix(matrix);
  /* "условимся, что матрица всегда имеет чётное количество столбцов
  и количество столбцов всегда равно количеству строк." - поэтому
  мы можем отталкиваться от кол-ва строк в матрице, для того
  чтобы найти вертикальную ось - pivot */
  const pivot = newMatrix.length / 2;
  for (const row of newMatrix) {
    for (let i = 0; i < pivot; i += 1) {
      row[row.length - 1 - i] = row[i];
    }
  }
  return newMatrix;
};

// teacher solution
// const makeMatrix = (size) => {
//   const matrix = [];
//   for (let i = 0; i < size; i += 1) {
//     matrix.push(new Array(size));
//   }
//   return matrix;
// };
// const getMirrorMatrix = (array) => {
//   const size = array.length;
//   const mirrorArray = makeMatrix(size);
//   for (let i = 0; i < size; i += 1) {
//     for (let j = 0; j < size / 2; j += 1) {
//       mirrorArray[i][j] = array[i][j];
//       mirrorArray[i][size - j - 1] = array[i][j];
//     }
//   }
//   return mirrorArray;
// };

// testing
const testMatrix = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
];
console.log(getMirrorMatrix(testMatrix));
console.log(testMatrix);
