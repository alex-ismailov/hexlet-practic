import { compareFileSizes } from '../info.js';

const filepath1 = '17 Asynchronous programming/05 Ordering Asynchronous Operations/__tests__/testFile1.txt';
const filepath2 = '17 Asynchronous programming/05 Ordering Asynchronous Operations/__tests__/testFile2.txt';

test('compareFileSizes 1', () => {
  const filepath = '17 Asynchronous programming/05 Ordering Asynchronous Operations/__tests__/testFile1.txt';
  compareFileSizes(filepath1, filepath1, (_error1, result) => {
    expect(result).toBe(0);
  });
});

test('compareFileSizes 2', () => {
  compareFileSizes(filepath1, filepath2, (_error1, result) => {
    expect(result).toBe(-1);
  });
});

test('compareFileSizes 3', () => {
  compareFileSizes(filepath2, filepath1, (_error1, result) => {
    expect(result).toBe(1);
  });
});
