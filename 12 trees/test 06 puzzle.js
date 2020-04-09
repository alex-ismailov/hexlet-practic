/* Реализуйте и экспортируйте по умолчанию функцию combine, которая объединяет отдельные ветки в одно дерево.
Каждая из веток в свою очередь является также деревом.

Функция может принимать на вход неограниченное количество веток и соединяет их.
Корневым узлом объединённого дерева является корневой узел первой переданной ветки.
Подсказки
Используйте функции из библиотеки lodash. */

import _ from 'lodash';

/* data */
const branch1 = ['A', [ //   A
  ['B', [ //   |
    ['C'], //   B
    ['D'], //  / \
  ]], // C   D
]];

const branch2 = ['B', [ //   B
  ['D', [ //   |
    ['E'], //   D
    ['F'], //  / \
  ]], // E   F
]];

const branch3 = ['I', [ //   I
  ['A', [ //   |
    ['B', [ //   A
      ['C'], //   |
      ['H'], //   B
    ]], //  / \
  ]], // C   H
]];

const resTree = ['A', [ //     A
  ['B', [ //    / \
    ['C'], //   B   I
    ['D', [ //  /|\
      ['E'], // C D H
      ['F'], //  / \
    ]], // E   F
    ['H'],
  ]],
  ['I'],
]];

const makeJoints = (tree, parent) => {
  const [node, children] = tree;

  if (!children) {
    return { [node]: [parent] };
  }

  const flattenChildren = _.flatten(children);
  const neighbors = [...flattenChildren, parent].filter((c) => c && !_.isArray(c));

  return {
    [node]: neighbors,
    ...children.reduce((acc, currentNode) => ({ ...acc, ...makeJoints(currentNode, node) }), {}),
  };
};

const buildTree = (adjacencyList, node) => {
  const iter = (currentNode, acc) => {
    const checkedNodes = [...acc, currentNode];
    const children = adjacencyList[currentNode].filter((c) => !checkedNodes.includes(c));
    return _.isEmpty(children)
      ? [currentNode]
      : [currentNode, children.reduce((iAcc, c) => [...iAcc, iter(c, checkedNodes)], [])];
  };
  return iter(node, []);
};

const customizer = (objValue, srcValue) => {
  return !objValue || objValue.includes(srcValue)
    ? objValue
    : _.union(objValue, srcValue);
};

const combine = (...trees) => {
  const [first] = trees;
  const [root] = first;
  const joints = trees
    .map((tree) => makeJoints(tree))
    .reduce((acc, currentJoints) => _.mergeWith(acc, currentJoints, customizer), {});

  const newTree = buildTree(joints, root);

  return newTree;
};

/* testing */
console.log(JSON.stringify(resTree));
console.log(JSON.stringify(combine(branch1, branch2, branch3)));

console.log(JSON.stringify(combine(branch2, branch1, branch3)));
console.log(JSON.stringify(combine(branch3, branch2, branch1)));

/* ************ */
// (objValue, srcValue, key, object, source, stack).
// return _.mergeWith({}, acc, jointsFromBranch, _.union);

const combine2 = (...trees) => {
  const [first] = trees;
  const [root] = first;
  const joints = trees
    .map((tree) => makeJoints(tree))
    .reduce((acc, currentJoints) => {
      return _.mergeWith(acc, currentJoints, _.union)
    }, {});

  console.log(joints);
  const newTree = buildTree(joints, root);

  return newTree;
};

// const combine2 = (...trees) => {
//   const [first] = trees;
//   const [root] = first;
//   const joints = trees
//     .map((tree) => makeJoints(tree))
//     .reduce((acc, currentJoints) => {
//       console.log('acc');
//       console.log(acc);
//       console.log('currentJoints');
//       console.log(currentJoints);
//       return _.mergeWith({}, acc, currentJoints, _.union)
//     }, {});

//   console.log(joints);
//   const newTree = buildTree(joints, root);

//   return newTree;
// };

// console.log('%%%%');
// console.log(JSON.stringify(combine2(branch1, branch2, branch3)));

// const fn = (...trees) => {
//   const [first] = trees;
//   const [root] = first;

//   console.log(JSON.stringify(first));
//   console.log(root);
// };

// fn(branch1, branch2, branch3);
