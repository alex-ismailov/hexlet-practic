/* Реализуйте и экспортируйте асинхронную функцию reverse,
которая изменяет порядок расположения строк в файле на обратный. */

// import { reverse } from './file.js';

// До
// one
// two

// reverse(filepath);

// После
// two
// one
/* --------------------------------------------- */

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
// const reverseStr =

// export const reverse = (filepath) => (
//   fs.readFile(filepath, 'utf-8')
//     .then((content) => {
//       const [first, second] = content.split('\n');
//       return `${second}\n${first}`;
//     })
//     .then((content) => fs.writeFile(filepath, content))
// );

/* teacher solution */
export const reverse = (filepath) => (
  fs.readFile(filepath, 'utf-8')
    .then((content) => {
      const [first, second] = content.split('\n');
      return fs.writeFile(filepath, `${second}\n${first}`);
    })
);
// END
