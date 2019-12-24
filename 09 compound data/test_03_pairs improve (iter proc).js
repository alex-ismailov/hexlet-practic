/* Пару можно создать на основе строки. Для хранения двух значений применим разделитель.
Им может выступить любой символ, однако во избежание совпадений с исходными данными лучше взять
редко используемое значение.
Для этого подойдёт так называемая управляющая или escape-последовательность,
которая начинается с обратной косой черты. Мы будем использовать специальный символ \t,
обозначающий горизональную табуляцию.
Функции car и cdr должны получить содержимое строки до и после разделителя соответственно.
Управляющая последовательность воспринимается интерпретатором как одиночный символ, т.е. имеет длину, равную 1.
Обязательным условием является отсутствие данного символа в строках, которые объединяются в пару.
Реализуйте и экспортируйте следующие функции в соответствии с алгоритмом выше:
cons
car
cdr
Примеры
const pair = cons('computer', 'science'); // 'computer\tscience'
car(pair); // 'computer'
cdr(pair); // 'science'
Подсказки
Для подсчёта длины строки используйте функцию length() из модуля strings.
 */

const length = (str) => str.length;
const separator = '\t';
const cons = (str1, str2) => `${str1}${separator}${str2}`;
const getSeparatorIndex = (pair) => {
  let sepIndex = null;
  for (let i = 0; i < length(pair); i += 1) {
    if (pair[i] === separator) {
      sepIndex = i;
      break;
    }
  }
  return sepIndex;
};
const getValue = (pair, begin, end) => {
  let acc = '';
  for (let i = begin; i < end; i += 1) {
    acc += pair[i];
  }
  return acc;
};
const car = (pair) => getValue(pair, 0, getSeparatorIndex(pair));
const cdr = (pair) => getValue(pair, getSeparatorIndex(pair) + 1, length(pair));

// testing
const pair = cons('comp', 'ram');
console.log('car(pair) = ' + car(pair));
console.log('cdr(pair) = ' + cdr(pair));
