/* file.js
Реализуйте и экспортируйте асинхронную функцию touch, которая создает файл если его не существует.

import { touch } from './file.js';

touch('/myfile').then(() => console.log('created!'));
Подсказка
fs.access - проверка существования файла */

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
// export const touch = (filepath) => fs.access(filepath)
//   .then(() => console.log('file is exist'))
//   .catch(() => {
//     fs.writeFile(filepath)
//       .catch(console.log);
//   });

/* teacher solution */
export const touch = (filepath) => fs.access(filepath)
  .catch(() => fs.writeFile(filepath));
// END
