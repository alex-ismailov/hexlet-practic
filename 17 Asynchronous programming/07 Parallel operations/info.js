/* info.js
Реализуйте и экспортируйте асинхронную функцию getDirectorySize, которая считает размер переданной директории
(не включая поддиректории). Анализ размера файла должен происходить параллельно,
для этого воспользуйтесь библиотекой async

Пример:
import { getDirectorySize } from './info.js';

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
Подсказка
fs.readdir - чтение содержимого директории
path.join - конструирует пути
async.map
fs.stat - информация о файле
_.sumBy - нахождение суммы в массиве */

/* eslint-disable import/prefer-default-export */
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)
export const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (_err1, elements) => {
    if (_err1) {
      cb(_err1);
      return;
    }
    const elementPaths = elements.map((e) => path.join(dirPath, e));

    async.map(elementPaths, fs.stat, (_err2, stats) => {
      if (_err2) {
        cb(_err2);
        return;
      }
      const files = stats.filter((e) => e.isFile());
      const totalSize = _.sumBy(files, 'size');
      cb(null, totalSize);
    });
  });
};
