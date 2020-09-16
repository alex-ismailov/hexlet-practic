/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
const cloneDeep = (data) => {
  const result = {};
  const keys = Object.keys(data);

  for (const key of keys) {
    const dataProp = data[key];
    result[key] = _.isObject(dataProp)
      ? { ...cloneDeep(dataProp) }
      : dataProp;
  }

  return result;
};

export default cloneDeep;
// END
