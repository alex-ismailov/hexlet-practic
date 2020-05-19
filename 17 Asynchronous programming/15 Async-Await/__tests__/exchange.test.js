import os from 'os';
import { promises as fs } from 'fs';
import { exchange } from '../exchange';

test('exchange 1', async () => {
  const firstPath = `${os.tmpdir()}/first`;
  const secondPath = `${os.tmpdir()}/second`;
  const firstContent = 'content1';
  const secondContent = 'content2';
  await fs.writeFile(firstPath, firstContent);
  await fs.writeFile(secondPath, secondContent);
  await exchange(firstPath, secondPath);

  const result1 = await fs.readFile(firstPath, 'utf-8');
  expect(result1).toBe(secondContent);
  const result2 = await fs.readFile(secondPath, 'utf-8');
  expect(result2).toBe(firstContent);
});