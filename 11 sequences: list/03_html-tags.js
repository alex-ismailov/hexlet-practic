import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';

export const make = () => l();

// node — создает новый тег. Содержит два элемента, имя тега и его содержимое. 
// Дополнительно реализуйте селекторы тега: getName и getValue.
const node = (name, content) => cons(name, content);
const getName = (tag) => car(tag);
const getValue = (tag) => cdr(tag);
// *** node, getName, getValue tests ***
const tag = node('div', 'what is love?');
console.log(getName(tag));
console.log(getValue(tag));
console.log('-----\n');
// ***

// append — добавляет элемент (тег), созданный с помощью node, в html-список. 
// Возвращает новый html-список. Новый элемент должен добавляться в начало ("голову") списка.
const append = (dom, tag) => consList(tag, dom);
// *** append test ***
const dom1 = make();
const div = node('div', 'Baby don`t hurt me');
const dom2 = append(dom1, div);
console.log(listToString(dom2));
console.log(pairToString(dom2));
console.log('-----\n');
// ***

// toString — возвращает текстовое представление html на основании html-списка.
const toString = (currentDom) => {
  const iter = (dom, acc) => {
    if (isEmpty(dom)) {
      return acc;
    }
    const element = head(dom);
    const tag = getName(element);
    const tagContent = getValue(element);
    return iter(tail(dom), `<${tag}>${tagContent}</${tag}>${acc}`);
  };
  return iter(currentDom, '');
};

// ver 2
const toString = (currentDom) => {
  const iter = (dom, acc) => (
    isEmpty(dom) ? acc : iter(
      tail(dom),
      `<${getName(head(dom))}>${getValue(head(dom))}</${getName(head(dom))}>${acc}`,
    )
  );
  return iter(currentDom, '');
};

// Teacher solution
const toString = (dom) => {
  if (isEmpty(dom)) {
    return '';
  }
  const element = head(dom);
  const tag = getName(element);
  const tagContent = getValue(element);
  const restOfHtml = toString(tail(dom));
  return `${restOfHtml}<${tag}>${tagContent}</${tag}>`;
};

// *** toString test ***
const p = node('p', 'Don`t hurt me no more');
const dom3 = append(dom2, p);
console.log(toString(dom3));

// console.log(pairToString(dom3));
// console.log(pairToString(head(dom3)));
// console.log(pairToString(tail(dom3)));

// console.log(car(head(dom3)));
// console.log(cdr(head(dom3)));

// console.log(car(head(tail(dom3))));
// console.log(cdr(head(tail(dom3))));