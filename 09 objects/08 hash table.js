/*
  Реализуйте и экспортируйте набор функций, для работы со словарём,построенным на хеш-таблице.
  Для простоты, наша реализация не поддерживает разрешение коллизий.

  make() — создаёт новый словарь
  set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для создания и
  для изменения. Функция возвращает true, если удалось установить значение.
  При возникновении коллизии, функция никак не меняет словарь и возвращает false.
  get(map, key, defaultValue = null) — читает в словаре значение по ключу.
  Параметр defaultValue — значение, которое функция возвращает,
  если в словаре нет ключа (по умолчанию равно null).
  Функции set и get принимают первым параметром словарь.
  Передача идёт по ссылке, поэтому set может изменить его напрямую.
*/

/* Для реализации ассоциативного массива, используем АТД - хэш таблица.
Она позволяет организовать данные ассоциативного массива удобным для хранения способом.
Для этого хеш-таблица использует две вещи:
индексированный массив и функцию для хеширования ключей.
Важно! хеш-таблица это не просто способ размещать данные, она включает в себя логику. */

/* eslint-disable no-param-reassign */
import crc32 from 'crc-32';

/* Создаем АТД - Ассоциативный массив, в виде обычного массива в который будем помещять подмассивы
в которых будут храниться пары ключ-значение. */
const make = () => []; // это еще называется создать Хэш
const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

const set = (map, key, value) => {
  const index = getIndex(key); // форматируем key в индекс
  /* Коллизия возникает, когда вычисленный индекс существует,
  но записанный в него ключ не соответствует переданному ключу. */
  if (map[index]) {
    const [currentKey] = map[index];
    /* При возникновении коллизии, функция никак не меняет словарь и возвращает false. */
    if (currentKey !== key) {
      return false;
    }
  }
  map[index] = [key, value];
  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index]) {
    return defaultValue;
  }
  const [, value] = map[index];
  return value;
};

/* testing */
const map = make();
const result1 = get(map, 'key');
console.log(result1); // toBeNull();

const result2 = get(map, 'key', 'value');
console.log(result2); // toBe('value');

set(map, 'key2', 'value2');

const result3 = get(map, 'key2');
console.log(result3); // toBe('value2');

const result4 = get(map, 'undefined');
console.log(result4); // toBeNull();

set(map, 'key2', 'another value');
const result5 = get(map, 'key2');
console.log(result5); // toBe('another value');
