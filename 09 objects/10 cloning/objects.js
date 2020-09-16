/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
const cloneDeep = (data) => {
  const result = {};

  const keys = Object.keys(data);
  if (keys.length === 0) {
    return result;
  }

  for (const key of keys) {
    const dataProp = data[key];
    if (_.isObject(dataProp)) {
      result[key] = { ...cloneDeep(dataProp) };
    } else {
      result[key] = dataProp;
    }
  }

  return result;
};

export default cloneDeep;
// END
