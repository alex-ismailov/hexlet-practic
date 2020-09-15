import _ from 'lodash';

// BEGIN (write your solution here)
export default (target, keys, source) => {
  if (keys.length > 0) {
    const newSource = _.pick(source, keys);
    Object.assign(target, newSource);
  } else {
    Object.assign(target, source);
  }
};
// END
