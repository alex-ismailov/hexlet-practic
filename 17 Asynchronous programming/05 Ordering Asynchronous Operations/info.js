/* info.js
Реализуйте и экспортируйте асинхронную функцию compareFileSizes, которая сравнивает размеры двух файлов.
Если первый больше второго, то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.

import { compareFileSizes } from './info.js';

compareFileSizes('file1', 'file2', (_err, result) => console.log(result));
Подсказка
Для реализации этого задания, нужно воспользоваться функцией fs.stat, которая использовалась в примерах теории
Math.sign */

/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const compareFileSizes = (filePath1, filePath2, cb) => {
  fs.stat(filePath1, (_error1, stat1) => {
    fs.stat(filePath2, (_error2, stat2) => {
      const res = stat1.size - stat2.size;
      cb(null, Math.sign(res));
    });
  });
};
// END

// fs.stat('./test.txt', (_error, stat) => console.log(stat.size));

const filepath = `${__dirname}`;
console.log(filepath);
