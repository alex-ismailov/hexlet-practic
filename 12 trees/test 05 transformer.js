/* Перед прохождением данного испытания рекомендуется пройти и проанализировать решение учителя в испытании "Построение маршрута".

transformer.js
Реализуйте и экспортируйте по умолчанию функцию transform, которая строит дерево относительно заданного корневого узла.

Функция принимает 2 аргумента:

исходное дерево
узел, от которого будет построено новое дерево.
Функция должна возвращать новое дерево с сохранёнными связями между узлами, в котором переданный узел является корневым.

Подсказки
Используйте функции из библиотеки lodash.
Работа с иерархическими структурами данных */

import _ from 'lodash';

const getAdjacencyList = (tree, parent = null) => {
  const [node, children] = tree;
  if (!children) {
    return { [node]: [parent] };
  }
  const flattenChildren = _.flatten(children);
  const neighbors = [...flattenChildren, parent].filter((c) => c && !_.isArray(c));

  return {
    [node]: neighbors,
    ...children.reduce((acc, c) => ({ ...acc, ...getAdjacencyList(c, node) }), {}),
  };
};

const transform = (tree, root) => {
  const dict = getAdjacencyList(tree);
  const checkedNodes = [];
  const iter = (currentNode) => {
    checkedNodes.push(currentNode);
    const neighbors = dict[currentNode];
    const filtered = neighbors.filter((c) => !checkedNodes.includes(c));
    return filtered.length === 0
      ? [currentNode]
      : [currentNode, filtered.reduce((acc, current) => [...acc, iter(current)], [])];
  };

  return iter(root);
};
// END
/* testing */
/* eslint no-multi-spaces: 0 */

const tree = ['A', [ //     A
  ['B', [            //    / \
    ['D'],           //   B   C
  ]],                //  /   / \
  ['C', [            // D   E   F
    ['E'],
    ['F'],
  ]],
]];

console.log(JSON.stringify(transform(tree, 'B')));
// =>
// ['B', [           //   B
//   ['D'],          //  / \
//   ['A', [         // D   A
//     ['C', [       //      \
//       ['E'],      //       C
//       ['F'],      //      / \
//     ]],           //     E   F
//   ]],
// ]];
