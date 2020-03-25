// Реализуйте и экспортируйте по умолчанию функцию, которая
// принимает на вход предикат и дерево, а возвращает отфильтрованное дерево по предикату.

import { mkdir, mkfile, isDirectory } from '@hexlet/immutable-fs-trees';

/* data */
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);
/* ************************* */

const filter = (fn, tree) => {
  if (!fn(tree)) {
    return null;
  }
  return isDirectory(tree)
    ? { ...tree, children: tree.children.map((ch) => filter(fn, ch)).filter((v) => v) }
    : tree;
};

/* teacher solution */
// const filter = (f, node) => {
//   if (!f(node)) {
//     return null;
//   }
//   if (!isDirectory(node)) {
//     return node;
//   }

//   const children = node.children.map((n) => filter(f, n)).filter((v) => v);
//   return { ...node, children };
// };

/* testing */
const filteredTree = filter((n) => n.type === 'directory', tree);
console.log(JSON.stringify(filteredTree));const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }
  if (!isDirectory(node)) {
    return node;
  }

  const children = node.children.map((n) => filter(f, n)).filter((v) => v);
  return { ...node, children };
};
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'etc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'nginx',
//           type: 'directory',
//           meta: {},
//           children: [{
//             name: 'conf.d',
//             type: 'directory',
//             meta: {},
//             children: [],
//           }],
//         },
//         {
//           name: 'consul',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//       ],
//     },
//   ],
// }
