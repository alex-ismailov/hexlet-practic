import { l, isEmpty, head, tail, cons, reverse, cons as consList, toString as pairToString } from '@hexlet/pairs-data';
import { getName, getValue, node, is } from '@hexlet/html-tags';
import { toString as listToString } from '@hexlet/pairs-data';

const append = (dom, tag) => consList(tag, dom);
const reverseStr = (str) => str.split('').reverse().join('');
const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', getValue(element));
  } else {
    newElement = element;
  }
  return cons(newElement, b2p(tail(elements)));
};

// BEGIN (write your solution here)
const map = (proc, dom) => {
  const iter = (currDom, newDom) => {
    if (isEmpty(currDom)) {
      return newDom;
    }
    return iter(
      tail(currDom),
      cons(proc(head(currDom)), newDom),
    );
  };
  return reverse(iter(dom, l()));
};

const mirror = (items) => {
  const reverseCont = (elems) => node(getName(elems), reverseStr(getValue(elems)));
  return map(reverseCont, items);
};
// END

// map & mirror functions tests
const dom1 = l();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('blockquote', 'is a lisp'));

console.log(listToString(map((element) => {
  if (is('blockquote', element)) {
    return node('p', getValue(element));
  }
  return element;
}, dom3)));

console.log(listToString(mirror(dom3)));

