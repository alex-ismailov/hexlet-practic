import { execSync } from 'child_process';
import { URL } from 'url';
import path from 'path';

/* don't forget to start a local server */
// npx nodemon '23 polymorphism/09 dependency Inversion - Weather Service/server/bin/startup.js'

// const dirname = path.dirname(new URL(import.meta.url).pathname);
// const binPath = path.join(dirname, '..', 'bin/weather.js');
const binPath = path.join(path.resolve(), '23 polymorphism/09 dependency Inversion - Weather Service/bin/wheather.js');

test('berlin', () => {
  const expected = expect.stringMatching(/Temperature in berlin: \d+C/);
  const actual = execSync(`node '${binPath}' berlin`).toString();
  expect(actual).toEqual(expected);
});

test('monaco', () => {
  const expected = expect.stringMatching(/Temperature in monaco: \d+C/);
  const actual = execSync(`node '${binPath}' monaco`).toString();
  expect(actual).toEqual(expected);
});
