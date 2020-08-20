import fs from 'fs';
// import { jest } from '@jest/globals';
import path from 'path';

test('index', async () => {
  const initHtml = fs.readFileSync(path.join('18 DOM API /06 Declarative DOM Search/public', 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  const spy = jest.spyOn(window.console, 'log');
  await import('../public/index.js');
  const expected = {
    description: 'Category Description',
    title: 'Category Name',
    items: [
      { description: 'Article Description 1', title: 'Article Name 1' },
      { description: 'Article Description 2', title: 'Article Name 2' },
    ],
  };
  expect(spy).toHaveBeenCalledWith(expected);
});
