/* url.js
Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:

make(url) - Конструктор. Создает урл.
setProtocol(data, protocol) - Сеттер. Меняет схему.
getProtocol(data) - Селектор (геттер). Извлекает схему.
setHost(data, host) - Сеттер. Меняет хост.
getHost(data) - Геттер. Извлекает хост.
setPath(data, path) - Сеттер. Меняет строку запроса.
getPath(data) - Геттер. Извлекает строку запроса.
setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса.
Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, когда в запросе не было такого параметра
toString(data) - Геттер. Преобразует урл в строковой вид.
url = make('https://hexlet.io/community?q=low');

setProtocol(url, 'http:');
toString(url); // 'http://hexlet.io/community?q=low'

setPath(url, '/404');
toString(url); // 'http://hexlet.io/404?q=low'

setQueryParam(url, 'page', 5);
toString(url); // 'http://hexlet.io/404?q=low&page=5'

setQueryParam(url, 'q', 'high');
toString(url); // 'http://hexlet.io/404?q=high&page=5'
Подсказки
Работа с адресами — URL: https://nodejs.org/api/url.html */


/* solution */
/* eslint no-param-reassign: ["error", { "props": false }] */
const make = (url) => new URL(url);
const setProtocol = (data, protocol) => data.protocol = protocol;
const getProtocol = (data) => data.protocol;
const setHost = (data, host) => data.host = host;
const getHost = (data) => data.host;
const setPath = (data, path) => data.pathname = path;
const getPath = (data) => data.pathname;
const setQueryParam = (data, key, value) => data.searchParams.set(key, value);
const getQueryParam = (data, paramName, def = null) => {
  const value = data.searchParams.get(paramName);
  return value || def;
};

const toString = (data) => data.href;

/* testing */
let url = make('https://hexlet.io/community?q=low');
console.log(toString(url)); // toBe('https://hexlet.io/community?q=low');
console.log('-----------------------');

url = make('http://hexlet.io:8080/community?q=low');
console.log(getProtocol(url)); // toBe('http:');
console.log(getHost(url)); // toBe('hexlet.io:8080');
console.log(getPath(url)); // toBe('/community');
console.log('-----------------------');

url = make('http://hexlet.io/community?q=low');
setProtocol(url, 'https:');
console.log(toString(url)); // toBe('https://hexlet.io/community?q=low');
console.log('-----------------------');

url = make('https://hexlet.io/community?q=high');
setHost(url, 'code-basics.com');
console.log(toString(url)); // toBe('https://code-basics.com/community?q=high');
console.log('-----------------------');

url = make('https://hexlet.io/community?q=low');
setPath(url, '/404');
console.log(toString(url)); // toBe('https://hexlet.io/404?q=low');
console.log('-----------------------');

url = make('https://hexlet.io/community?q=low&user=guest');
console.log(getQueryParam(url, 'q')); // toBe('low');
console.log(getQueryParam(url, 'user')); // toBe('guest');
console.log(getQueryParam(url, 'b')); // toBeNull();
console.log('-----------------------');

url = make('https://hexlet.io/community?q=low&user=guest');

setQueryParam(url, 'q', 'high');
console.log(toString(url)); // toBe('https://hexlet.io/community?q=high&user=guest');

setQueryParam(url, 'page', 5);
console.log(toString(url)); // toBe('https://hexlet.io/community?q=high&user=guest&page=5');
console.log('-----------------------');

url = make('https://hexlet.io/community');
console.log(toString(url)); // toBe('https://hexlet.io/community');

url = make('https://hexlet.io/?q=high&page=5');
console.log(toString(url)); // toBe('https://hexlet.io/?q=high&page=5');
console.log('-----------------------');
