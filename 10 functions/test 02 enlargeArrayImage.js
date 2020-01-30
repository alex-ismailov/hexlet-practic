/* Реализуйте и экспортируйте по умолчанию функцию enlargeArrayImage,
которая принимает изображение в виде двумерного массива и увеличивает его в два раза. */

/* Примеры */
const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];
// ****
// *  *
// *  *
// ****

// enlargeArrayImage(arr);
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********

// const enlargeArrayImage = (data) => {
//   const res = data.map((dataRow) => {
//     return dataRow.map((char) => {
//       // console.log([char, char]);
//       return [char, char];
//     }).flat();
//   });
//   const res2 = res.map((row) => [row, row]).flat();
//   return res2;
//   // const res2 = res.map((row) => [row, row]);
//   // return res2;
// };

const enlargeArrayImage = (data) => (data
  .map((dataRow) => dataRow
    .map((char) => [char, char]).flat())
  .map((row) => [row, row]).flat()
);


console.log(enlargeArrayImage(arr));
