import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { attach, contents } from '@hexlet/tagged-types';

// BEGIN (write your solution here)
export const make = (name, damage) => attach('SimpleCard', cons(name, damage));

export const getName = (self) => car(contents(self));

export const damage = (self) => cdr(contents(self));
// END
