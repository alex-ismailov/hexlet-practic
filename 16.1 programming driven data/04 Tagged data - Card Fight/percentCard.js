import { cons, car, cdr } from '@hexlet/pairs';
import { attach, contents } from '@hexlet/tagged-types';

export const make = (name, percent) => attach('PercentCard', cons(name, percent));

export const getName = (self) => car(contents(self));

export const damage = (self, health) => Math.round(health * (cdr(contents(self)) / 100));
