import { reverse } from '../arrays.js';

test('reverse', () => {
  const names1 = ['john', 'smith', 'karl'];
  reverse(names1);
  expect(names1).toEqual(['karl', 'smith', 'john']);

  const names2 = [];
  reverse(names2);
  expect(names2).toEqual([]);

  const names3 = ['one', 'two'];
  reverse(names3);
  expect(names3).toEqual(['two', 'one']);

  const names4 = ['john', 'smith', 'karl', 'alan', 'joe'];
  reverse(names4);
  expect(names4).toEqual(['joe', 'alan', 'karl', 'smith', 'john']);
});
