/* Напишите тесты для функции without(coll, [values]), которая принимает первым параметром
массив и возвращает его копию, из которой исключены значения, переданные вторым и
последующими параметрами.

_.without([2, 1, 2, 3], 1, 2); // [3] */



const getFunction = require('../functions');

const without = getFunction();

// BEGIN (write your solution here)
test('without', () => {
  expect(without([1, 2, 1, 3, 2], 1, 2)).toEqual([3]);
  expect(without([1, 2, 1, 3, 2], 10, 20)).toEqual([1, 2, 1, 3, 2]);
  expect(without([], 10, 20)).toEqual([]);
  expect(without([1, 2, 1, 3, 2])).toEqual([1, 2, 1, 3, 2]);
});
// END
