import InMemoryKV from '../InMemoryKV.js';
import swapKeyValue from '../keyValueFunctions.js';

it('swapKeyValue', () => {
  const map = new InMemoryKV({ key: 10 });
  map.set('key2', 'value2');
  swapKeyValue(map);

  expect(map.get('key')).toBeNull();
  expect(map.get(10)).toBe('key');
  expect(map.get('value2')).toBe('key2');
});

it('swapKeyValue2', () => {
  const map = new InMemoryKV({ foo: 'bar', bar: 'zoo' });
  swapKeyValue(map);

  expect(map.toObject()).toEqual({ bar: 'foo', zoo: 'bar' });
});
