/* Рациональное число — число, представляемое обыкновенной дробью m/n, числитель m — целое число,
а знаменатель n — натуральное число. Пример рационального числа: 2/3.

Формулы
Сложение
a/b + c/d = (a * d + b * c) / (b * d)
Вычитание
a/b - c/d = (a * d - b * c) / (b * d)
Умножение
a/b * c/d = (a * c) / (b * d)
Деление
a/b / c/d = (a * d) / (b * c)
Равенство
a/b = c/d, если a * d = c * b
rational.js
Реализуйте абстракцию для работы с рациональными числами, используя пары:

Конструктор make(numer, denom).
Селекторы numer (числитель) и denom (знаменатель).
Функцию toString, возвращающую строковое представление рационального числа. Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.
Функцию-предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).
Функцию add, выполняющую сложение дробей.
Функцию sub, выполняющую вычитание дробей.
Функцию mul, выполняющую умножение дробей.
Функцию div, выполняющую деление дробей.
Экспортируйте созданные функции.
Обратите внимание, что результатом любой арифметической операции над рациональным числом будет рациональное число.

Примеры
const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);

toString(rat12); // '4 / 6'
isEqual(rat1, rat12); // true
add(rat1, rat2); // 25/6
sub(rat2, rat1); // 17/6
mul(rat1, rat2); // 14/6
div(rat1, rat2); // 4/21
Примечания
Как видно из примеров, нормализацию дробей делать не нужно. */

// additional information about rational numbers look here: https://www.youtube.com/watch?v=qvRk8Y1yHJI

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

// BEGIN (write your solution here)
const make = (numer, denom) => cons(numer, denom);
const numer = (rat) => car(rat);
const denom = (rat) => cdr(rat);
const toString = (rat) => `${numer(rat)} / ${denom(rat)}`;
const isEqual = (rat1, rat2) => (numer(rat1) * denom(rat2)) === (numer(rat2) * denom(rat1));
const add = (rat1, rat2) => make(
  (numer(rat1) * denom(rat2)) + (numer(rat2) * denom(rat1)),
  denom(rat1) * denom(rat2),
);
const sub = (rat1, rat2) => make(
  (numer(rat1) * denom(rat2)) - (numer(rat2) * denom(rat1)),
  denom(rat1) * denom(rat2),
);
const mul = (rat1, rat2) => make(
  numer(rat1) * numer(rat2),
  denom(rat1) * denom(rat2),
);
const div = (rat1, rat2) => make(
  numer(rat1) * denom(rat2),
  numer(rat2) * denom(rat1),
);

export {
  make, numer, denom, toString, isEqual, add, sub, mul, div,
};
