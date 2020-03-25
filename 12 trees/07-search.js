/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
файловое дерево и подстроку, а возвращает список файлов, имена которых
содержат эту подстроку. */
/* Обратите внимание на то, что возвращается не просто имя файла, а полный путь до файла,
начиная от корня.
Подсказки:
Для построения путей используйте функцию path.join.
Проверку вхождения строк можно делать с помощью функции str.includes(substr). */

import path from 'path';
import {
  mkdir, mkfile, isFile,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const findFilesByName = (root, str) => {
  const iter = (n, currPath, acc) => {
    const newPath = path.join(currPath, n.name);
    if (isFile(n)) {
      return n.name.includes(str)
        ? [...acc, newPath]
        : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, newPath, cAcc), acc);
  };
  return iter(root, '', []);
};
// END
/* data */
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

const res = findFilesByName(tree, 'co');
console.log(res); // => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
console.log(findFilesByName(tree, 'toohard')); // [];
console.log(findFilesByName(tree, 'data')); // ['/etc/consul/data'];
