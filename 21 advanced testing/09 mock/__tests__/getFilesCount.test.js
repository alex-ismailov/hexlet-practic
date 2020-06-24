import path from 'path';
import getFunction from '../functions';

const getFilesCount = getFunction();

const getFixturePath = (name) => path.join('21 advanced testing/09 mock/__fixtures__', name);

// BEGIN (write your solution here)
test('getFilesCount', () => {
  const callback = jest.fn();
  const fixturePath = getFixturePath('nested');
  getFilesCount(fixturePath, callback);
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith('Go!');
});
// END
