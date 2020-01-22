/* Шаг 1 - reversePair.js
Реализуйте функцию reversePair, которая принимает на вход пару и возвращает другую,
в которой значения переставлены местами:

import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair = cons('one', 'two');
console.log(toString(reversePair(pair))); // ('two', 'one') */

// *** solution 1 ***
const reversePair = (pair) => cons(cdr(pair), car(pair));

/* Шаг 2 - sumOfPairs.js
Реализуйте функцию sumOfPairs, которая принимает на вход
две пары и возвращает новую пару, в элементах которой находятся суммы элементов из исходных пар:

import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair1 = cons(4, 10);
const pair2 = cons(100, 0);
console.log(toString(sumOfPairs(pair1, pair2))); // (104, 10) */

// *** solution 2 ***
const sumOfPairs = (pair1, pair2) => cons(
  (car(pair1) + car(pair2)),
  (cdr(pair1) + cdr(pair2)),
);

/* аг 3 - findPrimitiveBox.js
Однажды вы сидели дома, когда курьер Василий принес вам коробку. С коробкой шла записка следующего содержания:
Коробка состоит из двух отсеков, в одном из которых письмо, а в другом лежит еще одна коробка,
в которой также два отсека и точно также один отсек с письмом, а в другом - коробка.
Коробки могут быть вложены друг в друга сколько угодно раз. Вам нужно добраться до коробки,
внутри которой нет вложенной коробки ни в одном из двух отсеков, и отдать ее курьеру.
Подчеркну, что во всех коробках, кроме той последней, в одном отсеке письмо (любые данные, которые не являются парой),
а в другом - всегда коробка, но никогда не две коробки одновременно. Сами отсеки при этом могут меняться,
то есть в одной коробке отсеком с письмом может быть первый, а в другой - последний. 
Реализуйте рекурсивную функцию findPrimitiveBox, которая принимает на вход "коробку" (пару),
находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.

import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair = cons(
  null,
  cons('one', 'two'),
);
toString(findPrimitiveBox(pair)); // ('one', 'two')

const pair2 = cons(
  cons(null, cons(1, 5)),
  null,
);
toString(findPrimitiveBox(pair2)); // (1, 5) */

// *** solution 3 ***
const findPrimitiveBox = (pair) => {
  if (isPair(car(pair))) {
    return findPrimitiveBox(car(pair));
  }
  if (isPair(cdr(pair))) {
    return findPrimitiveBox(cdr(pair));
  }
  return pair;
};

// Teacher solution
// const findPrimitiveBox = (pair) => {
//   const first = car(pair);
//   const last = cdr(pair);

//   if (!isPair(first) && !isPair(last)) {
//     return pair;
//   }

//   const next = isPair(first) ? first : last;
//   return findPrimitiveBox(next);
// };