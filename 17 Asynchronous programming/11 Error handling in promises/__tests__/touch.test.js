import os from 'os';
import { promises as fs } from 'fs';
import _ from 'lodash';
import { touch } from '../touch.js';

test('touch 1', () => {
  const filepath = `${os.tmpdir()}/example`;
  return fs.unlink(filepath)
    .catch(_.noop)
    .then(() => touch(filepath))
    .then(() => fs.access(filepath, 'utf-8'))
    .then((data) => {
      expect(data).toBe();
    });
});

test('touch 2', () => {
  const filepath = `${os.tmpdir()}/example`;
  return fs.unlink(filepath)
    .catch(_.noop)
    .then(() => fs.writeFile(filepath, 'content'))
    .then(() => touch(filepath))
    .then(() => fs.readFile(filepath, 'utf-8'))
    .then((data) => {
      expect(data).toBe('content');
    });
});
