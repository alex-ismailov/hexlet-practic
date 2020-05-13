/* watcher.js
Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла.
Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек.
Отслеживание изменений файла должно начинаться с момента вызова функции. Параметры функции:

Путь до файла, который нужно отслеживать
Период отслеживания
Колбек, который принимает на вход только ошибку
import watch from './watcher.js';

const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
Реализуйте эту логику используя функцию setInterval. Функция должна возвращать наружу идентификатор таймера.
Если во время анализа файла (через fs.stat) произошла ошибка, то нужно остановить таймер и
вызвать колбек, передав туда ошибку.

Подсказки
stats.mtimeMs — время последнего изменения
Date.now() — текущая дата
clearInterval */

import fs from 'fs';

// BEGIN (write your solution here)
const watch = (filepath, interval, cb) => {
  let checkTime = Date.now();

  const checkFile = (id) => {
    fs.stat(filepath, (_err, stat) => {
      if (_err) {
        clearInterval(id);
        cb(_err);
        return;
      }

      const { mtimeMs } = stat;
      if (mtimeMs > checkTime) {
        checkTime = mtimeMs;
        cb(null);
      }
    });
  };

  const id = setInterval(() => checkFile(id), interval);

  return id;
};

export default watch;
