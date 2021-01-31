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