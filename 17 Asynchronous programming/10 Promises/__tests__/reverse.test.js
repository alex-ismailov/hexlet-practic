import { promises as fs, readFileSync } from 'fs';
import { reverse } from '../reverse';

const reverseLines = (data) => data.split('\n').reverse().join('\n');

test('reverse 1', () => {
  const content = 'one\ntwo';
  const filepath = '/tmp/example';
  const promise = fs.writeFile(filepath, content)
    .then(() => reverse(filepath))
    .then(() => readFileSync(filepath, 'utf-8'));
  return expect(promise).resolves.toBe(reverseLines(content));
});
