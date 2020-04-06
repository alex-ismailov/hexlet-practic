/* Реализуйте и экспортируйте функцию compressImages, которая принимает на вход директорию,
находит внутри нее картинки и "сжимает" их.
Под сжиманием понимается уменьшение свойства size в метаданных в два раза.
Функия должна вернуть обновленную директорию со сжатыми картинками и всеми остальными данными,
которые были внутри этой директории.

Картинками считаются все файлы заканчивающиеся на .jpg. */

import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const compressImages = (tree) => {
  const nodeName = getName(tree);
  if (isFile(tree)) {
    if (nodeName.endsWith('.jpg')) {
      const compresedSize = getMeta(tree).size / 2;
      return mkfile(nodeName, { size: compresedSize });
    }
    return mkfile(nodeName);
  }
  const children = getChildren(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  return mkdir(nodeName, [...children.map((n) => compressImages(n))], newMeta);
};

// const compressImages = (tree) => {
//   const nodeName = getName(tree);
//   if (isFile(tree)) {
//     const [, extension] = nodeName.split('.');
//     if (extension && extension.toLowerCase() === 'jpg') {
//       const compresedSize = getMeta(tree).size / 2;
//       return mkfile(nodeName, { size: compresedSize });
//     }
//     return mkfile(nodeName);
//   }
//   const children = getChildren(tree);
//   const newMeta = _.cloneDeep(getMeta(tree));
//   return mkdir(nodeName, [...children.map((n) => compressImages(n))], newMeta);
// };

/* solution without mkdir, mkfile */
// const compressImages = (tree) => {
//   if (isFile(tree)) {
//     const [, extension] = getName(tree).split('.');
//     if (extension && extension.toLowerCase() === 'jpg') {
//       const newMeta = _.cloneDeep(getMeta(tree));
//       const compresedSize = newMeta.size / 2;
//       return { ...tree, meta: { size: compresedSize } };
//     }
//     return tree;
//   }
//   const children = getChildren(tree);
//   return { ...tree, children: children.map((n) => compressImages(n)) };
// };
// END

/* testing */
const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses'),
  mkdir('presentations'),
]);

const tree2 = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses'),
  mkdir('presentations'),
], { test: 'haha' });

console.log('***** tree 1 *****');
console.log(JSON.stringify(tree));
console.log('**********');
console.log(JSON.stringify(compressImages(tree)));
console.log();
console.log('***** tree 1 *****');
console.log(JSON.stringify(tree2));
console.log('**********');
console.log(JSON.stringify(compressImages(tree2)));
