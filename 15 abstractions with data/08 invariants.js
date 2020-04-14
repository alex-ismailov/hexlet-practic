/*
Реализуйте абстракцию для работы с рациональными числами включающую в себя следующие функции:

Конструктор makeRational - принимает на вход числитель и знаменатель, возвращает дробь.
Селектор getNumer - возвращает числитель
Селектор getDenom - возвращает знаменатель
Сложение add - складывает переданные дроби
Вычитание sub - находит разность между двумя дробями
Не забудьте реализовать нормализацию дробей удобным для вас способом.

Подсказки
Действия с дробями
Функция getGcd находит наибольший общий делитель двух чисел (уже импортирована в модуль)
Функция ratToString возвращает строковое представление числа (используется для отладки)
*/

// import getGcd from './utils.js';
const getGcd = (a, b) => (
  b === 0
    ? a
    : getGcd(b, a % b)
);

// BEGIN (write your solution here)
/* least common denominator */
const getLcd = (a, b) => (a * b) / getGcd(a, b);

const makeRational = (num, denom) => {
  const gcd = Math.abs(getGcd(num, denom));
  return ({ num: num / gcd, denom: denom / gcd });
};
const getNumer = (rational) => rational.num;
const getDenom = (rational) => rational.denom;

const add = (rational1, rational2) => {
  const n1 = getNumer(rational1);
  const n2 = getNumer(rational2);
  const d1 = getDenom(rational1);
  const d2 = getDenom(rational2);

  if (d1 === d2) {
    return makeRational(n1 + n2, d1);
  }

  const lcd = getLcd(d1, d2);
  const newNumer = (n1 * (lcd / d1)) + (n2 * (lcd / d2));

  return makeRational(newNumer, lcd);
};

const sub = (rational1, rational2) => {
  const n1 = getNumer(rational1);
  const n2 = getNumer(rational2);
  const d1 = getDenom(rational1);
  const d2 = getDenom(rational2);

  if (d1 === d2) {
    return makeRational(n1 - n2, d1);
  }

  const lcd = getLcd(d1, d2);
  const newNumer = (n1 * (lcd / d1)) - (n2 * (lcd / d2));

  return makeRational(newNumer, lcd);
};
// END
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

/* testing */
const rat1 = makeRational(3, 9);
console.log(`rat1: ${ratToString(rat1)}`);
console.log(getNumer(rat1)); // toBe(1);
console.log(getDenom(rat1)); // toBe(3);
console.log('****');

const rat2 = makeRational(10, 3);
console.log(`rat2: ${ratToString(rat2)}`);
console.log(add(rat1, rat2)); // toEqual(makeRational(11, 3));
console.log(sub(rat1, rat2)); // toEqual(makeRational(-3, 1));
console.log('****');

const rat3 = makeRational(-4, 16);
console.log(`rat3: ${ratToString(rat3)}`);
console.log(getNumer(rat3)); // toBe(-1);
console.log(getDenom(rat3)); // toBe(4);
console.log('****');


const rat4 = makeRational(12, 5);
console.log(`rat4: ${ratToString(rat4)}`);
console.log(add(rat3, rat4)); // toEqual(makeRational(43, 20));
console.log(sub(rat3, rat4)); // toEqual(makeRational(-53, 20));
console.log('****');

console.log(ratToString(rat1)); // toBe('1/3');
console.log(ratToString(rat3)); // toBe('-1/4');
console.log('****');

const rat5 = makeRational(1, 15);
const rat6 = makeRational(4, 25);
console.log(`rat5: ${ratToString(rat5)}`);
console.log(`rat6: ${ratToString(rat6)}`);
console.log(add(rat5, rat6)); // toEqual(makeRational(17, 75));
console.log(ratToString(sub(rat5, rat6))); // toEqual(makeRational(-7, 75));
console.log('****');
