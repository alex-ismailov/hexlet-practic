/* 12 trees -> ex 08 getHiddenFilesCount.js */
/* Реализуйте и экспортируйте по умолчанию функцию, которая считает количество скрытых файлов в
директории и всех поддиректориях. Скрытым файлом в Linux системах считается файл,
название которого начинается с точки. */

import _ from 'lodash';
import { mkdir, mkfile, isFile, getName, getChildren, isDirectory } from '@hexlet/immutable-fs-trees';

const getHiddenFilesCount = (tree) => {
  const iter = (node, acc) => {
    if (isFile(node)) {
      return getName(node).startsWith('.')
        ? 1
        : 0;
    }
    const children = getChildren(node);
    const hiddenFilesCounts = children.map((child) => iter(child, 0));

    return _.sum(hiddenFilesCounts);
  };
  return iter(tree, 0);
};

// const getHiddenFilesCount = (tree) => {
//   const iter = (node, acc) => {
//     if (isFile(node)) {
//       if (getName(node).startsWith('.')) {
//         return acc + 1;
//       }
//       return acc;
//     }
//     const children = getChildren(node);
    
//     return acc + children.reduce((iAcc, node) => iter(node, iAcc), 0);
//   };

//   return iter(tree, 0);
// };

/* data */
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

/* testing */
console.log(getHiddenFilesCount(tree)); // 3

var str = 'Быть или не быть, вот в чём вопрос.';
