/* Это упражнение вы уже делали, но теперь тоже самое нужно сделать с помощью промисов

file.js
Реализуйте и экспортируйте асинхронную функцию getDirectorySize, которая считает
размер переданной директории (не включая поддиректории).

Пример:
import { getDirectorySize } from './file.js';

getDirectorySize('/usr/local/bin').then(console.log);
Подсказка
fs.readdir - чтение содержимого директории
path.join - конструирует пути
fs.stat - информация о файле
_.sumBy - нахождение суммы в массиве */

/* eslint-disable import/prefer-default-export */
import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

// BEGIN (write your solution here)

export const getDirectorySize = (dirPath) => {
  const promise1 = fs.readdir(dirPath).then((elementNames) => {
    const elementPaths = elementNames.map((name) => path.join(dirPath, name));
    const promises = elementPaths.map((path) => fs.stat(path));

    return Promise.all(promises);
  });

  return promise1.then((stats) => {
    const files = stats.filter((stat) => stat.isFile());
    return _.sumBy(files, 'size')
  });
};
