import { mkdir, mkfile, isFile } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const reduce = (fn, tree, acc) => {
  const newAcc = fn(acc, tree);

  if (isFile(tree)) {
    return newAcc;
  }

  return tree.children.reduce((iAcc, n) => reduce(fn, n, iAcc), newAcc);
};


// END

/* testing */
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx'),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);

const res = reduce((acc, n) => acc + 1, tree, 0); // 6
console.log(res);

const actual2 = reduce((acc, n) => (n.type === 'file' ? acc + 1 : acc), tree, 0);
console.log(actual2);

const actual3 = reduce((acc, n) => (n.type === 'directory' ? acc + 1 : acc), tree, 0);
console.log(actual3);

// const newChidren = [ ...tree.children ]
// console.log(newChidren);

