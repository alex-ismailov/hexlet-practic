/* Реализуйте и экспортируйте по умолчанию функцию, которая "промисифицирует" асинхронные функции с колбеками.

import promisify from '../promisify.js';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const filepath = '/tmp/myfile';

writeFile(filepath, 'content')
  .then(() => readFile(filepath))
  .then(console.log);
Реализация этой функции опирается на тот факт, что колбек в асинхронных функциях всегда передается последним параметром.

Подсказка
Вам понадобятся rest и spread операторы */

const promisify = (func) => (...args) => new Promise((resolve, reject) => {
  func(...args, (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
});

export default promisify;
