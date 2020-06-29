import { execSync } from 'child_process';
import { URL } from 'url';
import path from 'path';

const dirname = path.dirname(new URL(import.meta.url).pathname);
const binPath = path.join(dirname, '..', 'bin/weather.js');

test('berlin', () => {
  const expected = expect.stringMatching(/Temperature in berlin: \d+C/);
  const actual = execSync(`node ${binPath} berlin`).toString();
  expect(actual).toEqual(expected);
});

test('monaco', () => {
  const expected = expect.stringMatching(/Temperature in monaco: \d+C/);
  const actual = execSync(`node ${binPath} monaco`).toString();
  expect(actual).toEqual(expected);
});
