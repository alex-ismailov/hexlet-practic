import _ from 'lodash';

// adjacency list structure: { city: [parent, [children]] }
const getAdjacencyList = (tree, parent = null) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);
  const neighbors = flatChildren.filter((n) => n && !_.isArray(n));

  return {
    [leaf]: [parent, [...neighbors]],
    ...children.reduce((acc, c) => ({ ...acc, ...getAdjacencyList(c, leaf) }), {}),
  };
};

const getRoute = (start, finish, dict) => {
  const iter = (currNode, route) => {
    if (currNode === finish) {
      return [...route, currNode];
    }
    const [parentNodeName] = dict[currNode];
    if (!parentNodeName) {
      return _.concat(route, getRoute(finish, currNode, dict).reverse());
    }
    const parentNode = dict[parentNodeName];
    const [, parentChildren] = parentNode;

    if (parentChildren.includes(finish)) {
      return _.concat([...route, currNode], getRoute(finish, parentNodeName, dict).reverse());
    }
    return iter(parentNodeName, [...route, currNode]);
  };

  return iter(start, []);
};

const itinerary = (tree, start, finish) => {
  const adjacencyList = getAdjacencyList(tree);
  return getRoute(start, finish, adjacencyList);
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

console.log(itinerary(tree, 'Klin', 'Rzhev'));
// [ 'Klin', 'Tver', 'Rzhev' ]
