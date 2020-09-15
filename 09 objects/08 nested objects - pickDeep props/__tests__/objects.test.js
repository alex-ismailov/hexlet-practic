import get from '../objects.js';

it('get', () => {
  const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };

  expect(get(data, [null])).toBeNull();
  expect(get(data, ['undefined'])).toBeNull();
  expect(get(data, ['user'])).toEqual('ubuntu');
  expect(get(data, ['user', 'ubuntu'])).toBeNull();
  expect(get(data, ['hosts', 1, 'name'])).toEqual('web2');
  expect(get(data, ['hosts', 5])).toBeNull();
  expect(get(data, ['hosts', 0])).toEqual({ name: 'web1' });
  expect(get(data, ['hosts', 1, null])).toEqual(3);
  expect(get(data, ['user', 'name', 'name'])).toBeNull();
  expect(get(data, ['hosts', 1, 'active'])).toBe(false);
});
