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

// append — добавляет элемент (тег), созданный с помощью node, в html-список. 
// Возвращает новый html-список. Новый элемент должен добавляться в начало ("голову") списка.
const append = (dom, node) => consList(node, dom);
// *** append test ***
const dom1 = make();
const div = node('div', 'Baby don`t hurt me');
const dom2 = append(dom1, div);
console.log(listToString(dom2));
console.log(pairToString(dom2));
console.log('-----\n');
// ***