/* JS: Деревья → Map */

/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
функцию-обработчик и дерево, а возвращает отображенное дерево. */

import { mkdir, mkfile, isDirectory } from '@hexlet/immutable-fs-trees';

/* data */
const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
/* *********** */

const map = (fn, tree) => {
  const updatedNode = fn(tree);

  return isDirectory(updatedNode)
    ? { ...updatedNode, children: updatedNode.children.map((c) => map(fn, c)) }
    : updatedNode;
};

/* testing */
const mappedTree = map(n => ({ ...n, name: n.name.toUpperCase() }), tree);
console.log(mappedTree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'ETC',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NGINX',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'HOSTS', type: 'file', meta: {} },
//   ],
// }
/* Подсказки: Используйте функцию isDirectory, чтобы проверить чем является текущая нода (директорией или файлом). */