import assert from 'power-assert';
import getFunction from '../functions.js';

const take = getFunction();

// BEGIN (write your solution here)
assert(take([]), []);
assert(take([], 2), []);
assert(take([4, 3]), [4]);
assert(take([1, 2, 3], 2), [1, 2]);
assert(take([4, 3], 9), [4, 3]);
// END
