/* Node.js
Реализуйте базовый класс Node таким чтобы он содержал в себе общую логику

PairedTag.js, SingleTag.js
Реализуйте типы тегов как подтипы типа Node. */

import _ from 'lodash';
import buildNode from './buildNode';

const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
    process: _.identity,
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
    process: _.identity,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  const args = rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
  return buildNode(args.name, args.attributes, args.body, args.children);
};

export default parse;
