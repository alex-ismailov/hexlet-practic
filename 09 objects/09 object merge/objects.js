import _ from 'lodash';

// BEGIN (write your solution here)
export default (target, keys, source) => {
  const filteredData = keys.length > 0
    ? _.pick(source, keys)
    : source;
  Object.assign(target, filteredData);
};
// END
