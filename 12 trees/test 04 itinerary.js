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

const getAdjacencyList = (tree) => {
  const adjacencyList = {};
  const makeAdjacencyList = (currTree, dict, parent = null) => {
    const [nodeName, branches] = currTree;
    const children = [];
    _.set(dict, nodeName, [parent, children]);
    if (branches) {
      branches.forEach((branch) => {
        const name = makeAdjacencyList(branch, dict, nodeName);
        children.push(name);
      });
    }
    return nodeName;
  };

  makeAdjacencyList(tree, adjacencyList);
  return adjacencyList;
};

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
  const adjacencyList = getAdjacencyList(tree);
  const commonParent = getCommonParent(from, to, adjacencyList);
  const upRoute = getRoute(from, commonParent, adjacencyList);
  const downRoute = getRoute(to, commonParent, adjacencyList).reverse();

  return _.uniq([...upRoute, ...downRoute]);
};

/* testing */
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

console.log(itinerary(tree, 'Dubna', 'Kostroma'));
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

console.log(itinerary(tree, 'Borisovka', 'Kurchatov'));
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']
