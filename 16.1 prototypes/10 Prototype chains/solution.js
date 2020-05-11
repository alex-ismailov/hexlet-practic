/* Node.js
Реализуйте тип Node.js используя прототип.

PairedTag.js, SingleTag.js
Реализуйте прототипное наследование от типа Node. */

import { identity } from 'lodash';
import buildNode from './buildNode';

const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
    process: identity,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

const parse = (data) => {
  const args = data.slice(1)
    .reduce((acc, arg) => {
      const { name, process } = getPropertyAction(arg);
      return { ...acc, [name]: process(arg, parse) };
    }, {
      name: data[0],
      attributes: {},
      body: '',
      children: [],
    });
  return buildNode(args.name, args.attributes, args.body, args.children);
};

export default parse;
