/* file.js
Реализуйте и экспортируйте асинхронную функцию getTypes, которая анализирует список переданных путей и
возвращает массив (в промисе), с описанием того, что находится по каждому из путей:

import { getTypes } from './file.js';

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]

Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка,
то значением для этого пути будет null. Для простоты считаем, что в эту функцию всегда передается как минимум один путь
для обработки (иначе придется задействовать механизм, который проходится в курсах далее).

Подсказки
fs.stat - информация о файле или директории. Для проверки на директорию используйте метод isDirectory.
Методы then и catch не меняют сам промис, а возвращают новый */

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const getTypes = (paths) => paths.reduce((acc, path) => {
  const newAcc = acc.then((data1) => fs.stat(path)
    .then((data2) => {
      const elementType = data2.isDirectory() ? 'directory' : 'file';
      return data1.concat(elementType);
    })
    .catch(() => data1.concat(null)));
  return newAcc;
}, Promise.resolve([]));
// END
