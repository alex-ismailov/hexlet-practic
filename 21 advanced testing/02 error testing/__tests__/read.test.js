import getFunction from '../functions.js';

const read = getFunction();

// BEGIN (write your solution here)
test('read', () => {
  expect(() => read('/undefined')).toThrow();
  expect(() => read('/etc')).toThrow();
});
// END
