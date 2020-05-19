/* file.js
Реализуйте и экспортируйте асинхронную функцию exchange, которая обменивает содержимое двух файлов.

import { exchange } from './file.js';

exchange('/myfile1', '/myfile2'); */

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const exchange = async (path1, path2) => {
  const promise1 = fs.readFile(path1, 'utf-8');
  const promise2 = fs.readFile(path2, 'utf-8');
  const [data1, data2] = await Promise.all([promise1, promise2]);

  await fs.writeFile(path1, data2);
  await fs.writeFile(path2, data1);
};
// END

const file1 = '17 Asynchronous programming/15 Async-Await/__tests__/file1.txt';
const file2 = '17 Asynchronous programming/15 Async-Await/__tests__/file2.txt';

exchange(file1, file2);
