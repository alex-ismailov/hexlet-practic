/* Во многих операционных системах (Linux, MacOS) существует утилита du.
Она умеет считать место в указанных файлах и директориях. Например так:
tmp$ du -sh *
 0B    com.docker.vmnetd.socket
10M    credo
4.0K    debug.mjs
 0B    filesystemui.socket
4.0K    index.php
37M    node_modules
88K    package-lock.json
22M    taxdome
Перед тем как делать упражнение, обязательно попробуйте поиграйте с этой утилитой в
терминале, посмотрите ее опции через man du.

du.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию, а
возвращает список узлов вложенных (директорий и файлов) в указанную директорию
на один уровень и место которое они занимают. Размер файла задается в метаданных.
Размер директории складывается из сумм всех размеров файлов находящихся внутри во
всех подпапках. Сами папки размера не имеют.

Обратите внимание на структуру результирующего массива.
Каждый элемент - массив с двумя значениями, именем директории и размером файлов внутри.
Результат отсортирован по размеру в обратном порядке. То есть сверху самые тяжелые,
внизу самые легкие.

Подсказки
sort */

import {
  mkdir, mkfile, reduce, isDirectory,
} from '@hexlet/immutable-fs-trees';

const shortDir = mkdir('etc', [
  mkdir('apache'),
  mkdir('nginx', [
    mkfile('nginx.conf', { size: 800 }),
  ]),
]);

const shortDir2 = mkdir('etc', [
  mkdir('apache'),
  mkdir('nginx', [
    mkfile('nginx.conf', { size: 800 }),
  ]),
  mkdir('consul', [
    mkfile('config.json', { size: 1200 }),
    mkfile('data', { size: 8200 }),
    mkfile('raft', { size: 80 }),
  ]),
]);

const fileTree = mkdir('/', [
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
// BEGIN (write your solution here)

const calculateUsageSize = (tree) => (
  reduce((acc, n) => {
    if (isDirectory(n)) {
      return acc;
    }
    return acc + n.meta.size;
  }, tree, 0)
);

const du = (tree) => {
  const res = tree.children.map((n) => [n.name, calculateUsageSize(n)]);
  return res.sort(([, size1], [, size2]) => size2 - size1);
};

// END
/* testing */
console.log(du(fileTree));
// => [ [ 'etc', 10280 ], [ 'hosts', 3500 ], [ 'resolve', 1000 ] ]

console.log(du(shortDir));
// => [ [ 'nginx', 800 ], [ 'apache', 0 ] ]

console.log(du(shortDir2));
// => [ [ 'consul', 9480 ], [ 'nginx', 800 ], [ 'apache', 0 ] ]
