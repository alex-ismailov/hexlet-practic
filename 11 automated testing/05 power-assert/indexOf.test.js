/* tests/indexOf.test.js
Напишите тесты для функции indexOf(items, value, [fromIndex=0]), которая возвращает индекс первого вхождения переданного элемента в массив, начиная поиск с индекса fromIndex, значение которого по умолчанию равно нулю:

indexOf([1, 2, 1, 2], 2); // 1
indexOf([1, 2, 1, 2], 2, 2); // 3
indexOf([2, 'one', 'cat', false], 8); // -1
Подсказки
_.indexOf */

const assert = require('power-assert');
const getFunction = require('../functions');

const indexOf = getFunction();

// Алгоритм такой: сначала пишем тест на позитивный сценарий, потом на корнер кейсы,
// типа передачи пустых массивов или особых данных.
// BEGIN (write your solution here)
assert(indexOf([1, 2, 3, 4], 2) === 1);
assert(indexOf([1, 2, 3, 2, 4], 2, 1) === 1);
assert(indexOf([1, 2, 3, 2, 4], 2, 2) === 3);
assert(indexOf([1], 1) === 0);
assert(indexOf([], 1) === -1);
// END

const functions = {
  right1: _.indexOf,
  wrong1: (items) => items[0],
  wrong2: (items, value) => items.indexOf(value) + 1,
  wrong3: (items, value) => {
    const index = items.indexOf(value);
    return index === -1 ? 0 : index;
  },
  wrong4: (items, value) => items.indexOf(value),
};
