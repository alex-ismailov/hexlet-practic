import path from 'path';
import ConfigFactory from '../ConfigFactory.js';

describe('ConfigFactory', () => {
  const pathToFixtures = path.join(__dirname, '__fixtures__');

  it('test yml', () => {
    const filePath = path.join(pathToFixtures, 'test.yml');
    const config = ConfigFactory.factory(filePath);
    const actual = config.getValue('key');
    expect(actual).toBe('value');
  });

  it('test yaml', () => {
    const filePath = path.join(pathToFixtures, 'test2.yaml');
    const config = ConfigFactory.factory(filePath);
    const actual = config.getValue('key');
    expect(actual).toBe('another value');
  });

  it('test json 1', () => {
    const filePath = path.join(pathToFixtures, 'test.json');
    const config = ConfigFactory.factory(filePath);
    const actual = config.getValue('key');
    expect(actual).toBe('something else');
  });

  it('test json 2', () => {
    const filePath = path.join(pathToFixtures, 'test2.json');
    const config = ConfigFactory.factory(filePath);
    const actual = config.getValue('files').getValue('config');
    expect(actual).toBe('json');
  });
});
