/* Напишите тесты для Validator. Он проверяет корректность данных. Принцип работы валидатора следующий:

С помощью метода addCheck(fn) в него добавляются проверки. Каждая проверка представляет из себя функцию-предикат, которая принимает на вход проверяемое значение и возвращает либо true либо false в зависимости от того, соответствует ли значение требованиям проверки или нет.
С помощью метода isValid(value), пользователь Validator проверяет соответствие значения всем добавленным проверкам. Если не было добавлено ни одной проверки, считается, что любое значение верное.
const validator = makeValidator();
validator.isValid('some value'); // true
validator.addCheck((v) => v > 5);
validator.isValid(3); // false
validator.isValid(8); // true
validator.addCheck(add more checks); */


const { isNumber } = require('lodash');
const getImplementation = require('../implementations');

const makeValidator = getImplementation();

test('Testing core functionality', () => {
  const validator = makeValidator();
  validator.addCheck(isNumber);

  expect(validator.isValid(8)).toBeTruthy();
  expect(validator.isValid('some value')).toBeFalsy();
});

test('Testing additional functionality', () => {
  const validator = makeValidator();
  expect(validator.isValid('some value')).toBeTruthy();
});

/* teacher tests */
test('validator', () => {
  const validator = makeValidator();
  expect(validator.isValid('value')).toBe(true);

  validator.addCheck(isNumber);
  validator.addCheck((v) => v > 10);
  validator.addCheck((v) => v % 2 === 0);

  expect(validator.isValid(false)).toBe(false);
  expect(validator.isValid('string')).toBe(false);
  expect(validator.isValid(8)).toBe(false);
  expect(validator.isValid(11)).toBe(false);

  expect(validator.isValid(12)).toBe(true);
  expect(validator.isValid(100)).toBe(true);
});
