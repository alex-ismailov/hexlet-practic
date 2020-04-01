import _ from 'lodash';

// const obj = {
//   Moscow: [null, ['Smolensk', 'Yaroslavl', 'Voronezh', 'Ivanovo', 'Vladimir', 'Tver']],
//   Smolensk: ['Mscow', []],
//   Yaroslavl: ['Moscow', []],
//   Voronezh: ['Moscow', ['Liski', 'Boguchar', 'Kursk']],
//   Liski: ['Voronezh', []],
//   Boguchar: ['Voronezh', []],
//   Kursk: ['Voronezh', ['Belgorod', 'Kurchatov']],
//   Belgorod: ['Kursk', ['Borisovka']],
//   Borisovka: ['Belgorod', []],
//   Kurchatov: ['Kursk', []],
//   Ivanovo: ['Moscow', ['Kostroma', 'Kineshma']],
//   Kostroma: ['Ivanovo', []],
//   Kineshma: ['Ivanovo', []],
//   Vladimir: ['Moscow', []],
//   Tver: ['Moscow', ['Klin', 'Dubna', 'Rzhev']],
//   Klin: ['Tver', []],
//   Dubna: ['Tver', []],
//   Rzhev: ['Tver', []],
// };

const tree = ['Moscow', [
  ['Smolensk'],
  ['Yaroslavl'],
  ['Voronezh', [
    ['Liski'],
    ['Boguchar'],
    ['Kursk', [
      ['Belgorod', [
        ['Borisovka'],
      ]],
      ['Kurchatov'],
    ]],
  ]],
  ['Ivanovo', [
    ['Kostroma'], ['Kineshma'],
  ]],
  ['Vladimir'],
  ['Tver', [
    ['Klin'], ['Dubna'], ['Rzhev'],
  ]],
]];

/* teacher */
const getAdjacencyList2 = (tree, parent = null) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }
  
  console.log(leaf);
  console.log(children);
  const flatChildren = _.flatten(children);
  console.log(flatChildren);
  // console.log([...flatChildren]);
  // const neighbors = [...flatChildren] // не понимаю зачем вот это - [...flatChildren]? если это и так уже массив.
  //   .filter((n) => n && !_.isArray(n));

  const neighbors = flatChildren // не понимаю зачем вот это - [...flatChildren]?
    .filter((n) => n && !_.isArray(n));

  console.log(neighbors);
  console.log('-----------------------------------------');
  return {
    [leaf]: [parent, [...neighbors]],
    ...children.reduce((acc, c) => ({ ...acc, ...getAdjacencyList2(c, leaf) }), {}),
  };
};

// const getAdjacencyList = (tree) => {
//   const adjacencyList = {};
//   const makeAdjacencyList = (currTree, dict, parent = null) => {
//     const [nodeName, branches] = currTree;
//     const children = [];
//     _.set(dict, nodeName, [parent, children]);
//     if (branches) {
//       branches.forEach((branch) => {
//         const name = makeAdjacencyList(branch, dict, nodeName);
//         children.push(name);
//       });
//     }
//     return nodeName;
//   };

//   makeAdjacencyList(tree, adjacencyList);
//   return adjacencyList;
// };

const getCommonParent = (first, second, dict) => {
  const [parentName] = dict[first];
  if (parentName === null) {
    return first;
  }
  const parent = dict[parentName];
  const [, parentChildren] = parent;
  if (parentChildren.includes(second)) {
    return parentName;
  }
  return getCommonParent(parentName, second, dict);
};

const getRoute = (from, to, dict) => {
  const iter = (curr, route) => {
    if (curr === to) {
      route.push(curr);
      return route;
    }
    route.push(curr);
    const [parent] = dict[curr];
    return iter(parent, route);
  };
  return iter(from, []);
};

const itinerary = (tree, from, to) => {
  const adjacencyList = getAdjacencyList2(tree);
  const commonParent = getCommonParent(from, to, adjacencyList);
  const upRoute = getRoute(from, commonParent, adjacencyList);
  const downRoute = getRoute(to, commonParent, adjacencyList).reverse();

  return _.uniq([...upRoute, ...downRoute]);
};

// console.log(getAdjacencyList(tree));

console.log('====================');
/* testing */
// console.log(itinerary(tree, 'Dubna', 'Kostroma'));
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

console.log(`answer: ${itinerary(tree, 'Borisovka', 'Kurchatov')}`);
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']

// console.log(getAdjacencyList(tree));
// console.log('***********');
// console.log(getAdjacencyList2(tree));
