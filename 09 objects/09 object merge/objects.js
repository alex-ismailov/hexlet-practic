import _ from 'lodash';

// BEGIN (write your solution here)
export default (target, keys, source) => {
  if (keys.length === 0) {
    Object.assign(target, source);
    return;
  }
  const newSource = keys.reduce((acc, key) => {
    acc[key] = source[key];
    return acc;
  }, {});

  Object.assign(target, newSource);
};
// END
