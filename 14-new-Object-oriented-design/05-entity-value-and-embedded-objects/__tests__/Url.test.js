import Url from '../Url.js';

const yandexUrl = 'http://yandex.ru?key=value&key2=value2';
const googleUrl = 'https://google.com:80?a=b&c=d&lala=value';

test('yandex', () => {
  const url = new Url(yandexUrl);

  expect(url.getScheme()).toEqual('http');
  expect(url.getHostName()).toEqual('yandex.ru');
  const params = {
    key: 'value',
    key2: 'value2',
  };
  expect(url.getQueryParams()).toEqual(params);
  expect(url.getQueryParam('key')).toEqual('value');
  expect(url.getQueryParam('key2', 'lala')).toEqual('value2');
  expect(url.getQueryParam('new', 'ehu')).toEqual('ehu');
  expect(url.equals(new Url(yandexUrl))).toBe(true);
  expect(url.equals(new Url(googleUrl))).toBe(false);
});

test('google', () => {
  const url = new Url(googleUrl);

  expect(url.getScheme()).toEqual('https');
  expect(url.getHostName()).toEqual('google.com');
  const params = {
    a: 'b',
    c: 'd',
    lala: 'value',
  };
  expect(url.getQueryParams()).toEqual(params);
  expect(url.getQueryParam('key')).toBeNull();
  expect(url.equals(new Url(googleUrl))).toBe(true);
  expect(url.equals(new Url('https://google.com'))).toBe(false);
  expect(url.equals(new Url(googleUrl.replace('80', '443')))).toBe(false);
});
