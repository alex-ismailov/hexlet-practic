import path from 'path';
import _ from 'lodash';
import getFunction from '../functions';

const getFilesCount = getFunction();

const getFixturePath = (name) => path.join('21 advanced testing/06 inver deps/__fixtures__', name);

// BEGIN (write your solution here)

test('get files count from flat', () => {
  const pathToFlat = getFixturePath('flat');
  const actual = getFilesCount(pathToFlat, _.noop);
  expect(actual).toBe(3);
});

test('get files count from nested', () => {
  const pathToFlat = getFixturePath('nested');
  const actual = getFilesCount(pathToFlat, _.noop);
  expect(actual).toBe(4);
});
// END
