import { identity } from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

export const render = (ast) => {
  const {
    name,
    attributes,
    body,
    children,
  } = ast;

  const attrs = Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');
  const content = children.length > 0 ? children.map(render).join('') : body;

  return singleTagsList.has(name)
    ? `<${name}${attrs}>`
    : `<${name}${attrs}>${content}</${name}>`;
};

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

export const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  return rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
};
