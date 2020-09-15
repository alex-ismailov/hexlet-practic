/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export default (data, keys) => {
  const dataKeys = Object.keys(data);
  return keys.reduce((acc, key) => {
    if (dataKeys.includes(key)) {
      acc[key] = data[key];
      return acc;
    }
    return acc;
  }, {});
};
// END
