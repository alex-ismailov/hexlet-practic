/* printer.js
Реализуйте асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.

import print from './printer.js';
print('./myfile');
Подсказки
В теории был пример асинхронного чтения файла. Нужно сделать по аналогии. */

/* eslint-disable no-console */
import fs from 'fs';

// BEGIN (write your solution here) (write your solution here)
const printer = (path) => fs.readFile(
  path,
  'utf-8',
  (_error, data) => console.log(data),
);

export default printer;
// END


/* testing */
// printer('src/hexlet/17 Asynchronous programming/myfile.txt');