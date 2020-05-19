/* file.js
Реализуйте и экспортируйте асинхронную функцию exchange, которая обменивает содержимое двух файлов.

import { exchange } from './file.js';

exchange('/myfile1', '/myfile2'); */

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const exchange = async (filePath1, filePath2) => {
  const reading1 = fs.readFile(filePath1, 'utf-8');
  const reading2 = fs.readFile(filePath2, 'utf-8');
  const [data1, data2] = await Promise.all([reading1, reading2]);
  const writing1 = fs.writeFile(filePath1, data2);
  const writing2 = fs.writeFile(filePath2, data1);
  await Promise.all([writing1, writing2]);
};
// END
