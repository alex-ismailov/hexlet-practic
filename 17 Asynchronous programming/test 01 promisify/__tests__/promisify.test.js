import path from 'path';
import fs from 'fs';
import os from 'os';
import promisify from '../promisify.js';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const access = promisify(fs.access);
const mkdtemp = promisify(fs.mkdtemp);

test('promisify', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'foo-'));
  const filepath = path.join(directory, 'file');
  await writeFile(filepath, 'content');
  await access(filepath);
  await readFile(filepath);
});

test('promis reject', async () => {
  const filepath = 'undefined';
  await expect(readFile(filepath)).rejects.toThrow();
});
