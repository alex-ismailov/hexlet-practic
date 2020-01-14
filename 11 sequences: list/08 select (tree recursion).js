import { /* eslint-disable */
  l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString, length
} from '@hexlet/pairs-data';

import {
  is, hasChildren, children, filter, reduce, toString as htmlToString,
  make, node, append, getName, getValue,
} from '@hexlet/html-tags'; /* eslint-enable */

// BEGIN (write your solution here)
const flat = (tag, treeList) => {
  if (isEmpty(treeList)) {
    return l();
  }
  const isLeaf = (elem, acc) => {
    if (!hasChildren(elem)) {
      return consList(elem, acc);
    }
    return concat(select(tag, children(elem)), consList(elem, acc));
  };
  return reduce(isLeaf, l(), treeList);
};

export const select = (tag, list) => {
  const linearList = flat(tag, list);
  return filter((elem) => is(tag, elem), linearList);
};


// const select = (tagName, html) => reduce((element, acc) => {
//   const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
//   return is(tagName, element) ? consList(element, acc2) : acc2;
// }, l(), html);
// END

    const dom1 = make();
    const children1 = l(node('a', l(node('span', 'scheme'))));
    const dom2 = append(dom1, node('h1', children1));
    const dom3 = append(dom2, node('p', 'is a lisp'));
    const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
    const dom4 = append(dom3, node('ul', children2));
    const children3 = l(node('li', 'item 1'), node('li', 'item 2'));
    const dom5 = append(dom4, node('ol', children3));
    const dom6 = append(dom5, node('p', 'is a functional language'));
    const children4 = l(node('li', 'item'));
    const dom7 = append(dom6, node('ul', children4));
    const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
    const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

// console.log(htmlToString(dom) + '\n*****\n');
console.log(length(select('span', dom))) // toBe(2);
    console.log(length(select('section', dom))) // toBe(0);
    console.log(length(select('li', dom))) // toBe(5);
    console.log(length(select('p', dom))) // toBe(5);
    console.log(htmlToString(select('p', dom))) // toBe(5);
    console.log(length(select('h1', dom))) // toBe(2);
    console.log(length(select('div', dom))) // toBe(3);


    console.log(htmlToString(select('div', dom))) // toBe(3);