import bqs from '../buildQueryString';

test('buildQueryString', () => {
  const result1 = bqs({});
  expect(result1).toEqual('');

  const result2 = bqs({ page: 1 });
  expect(result2).toEqual('page=1');

  const result3 = bqs({ per: 10, page: 1 });
  expect(result3).toEqual('page=1&per=10');

  const result4 = bqs({
    a: 10,
    s: 'Wow',
    d: 3.2,
    z: '89',
  });
  expect(result4).toEqual('a=10&d=3.2&s=Wow&z=89');
});
