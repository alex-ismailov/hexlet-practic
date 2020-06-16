import getFunction from '../functions.js';

const read = getFunction();

// BEGIN (write your solution here)
test('file not found', () => {
  expect(() => {
    read('/undefined');
  }).toThrow();
});
test('it is function', () => {
  expect(() => {
    read('/etc');
  }).toThrow();
});
// END
