/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
export default (sentence) => {
  const words = _.words(sentence);
  return words.reduce((acc, word) => {
    acc[word.toLowerCase()] = (acc[word.toLowerCase()] ?? 0) + 1;
    return acc;
  }, {});
};
// END
