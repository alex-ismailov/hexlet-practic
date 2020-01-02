import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';

export const make = () => l();

// node — создает новый тег. Содержит два элемента, имя тега и его содержимое. 
// Дополнительно реализуйте селекторы тега: getName и getValue.
const node = (name, value) => cons(name, value);
const getName = (node) => car(node);
const getValue = (node) => cdr(node);
// *** node, getName, getValue tests ***
const tag = node('div', 'what is love?');
console.log(getName(tag));
console.log(getValue(tag));
console.log('-----\n');
// ***
