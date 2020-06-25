/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку,
а возвращает список файлов, имена которых содержат эту подстроку. Функция должна вернуть полные пути до файлов.

Примеры
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import findFilesByName from '../findFilesByName.js';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

findFilesByName(tree, 'co');
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
Подсказки
Для реализации этой логики, вам понадобится аккумулятор, в котором будет храниться путь от корня до текущего узла.
При проваливании внутрь директорий к нему добавляется имя текущей директории. В остальном логика работы идентична
примеру из теории.
Переменную содержащую внутри себя путь от корня до текущего узла можно назвать ancestry.
Для построения путей используйте функцию path.join().
Проверку вхождения строк можно делать с помощью функции str.includes(). */

import path from 'path';
import {
  mkdir, mkfile, getName, getChildren,
  isFile,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

/* teacher solution */
const findFilesByName = (tree, searchStr) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);
    if (isFile(node)) {
      return name.includes(searchStr)
        ? newAncestry
        : [];
    }
    const children = getChildren(node);
    return children.flatMap((child) => iter(child, newAncestry));
  };

  return iter(tree, '');
};

// const findFilesByName = (tree, searchStr) => {
//   const iter = (node, currentPath, acc) => {
//     const nodeName = getName(node);
//     const newCurrentPath = path.join(currentPath, nodeName);

//     if (isFile(node)) {
//       return nodeName.includes(searchStr)
//         ? [...acc, newCurrentPath]
//         : acc;
//     }

//     const children = getChildren(node);
//     if (children.length === 0) {
//       return acc;
//     }

//     return children.flatMap((child) => iter(child, newCurrentPath, acc));
//   };

//   return iter(tree, '', []);
// };

console.log(findFilesByName(tree, 'co'));
