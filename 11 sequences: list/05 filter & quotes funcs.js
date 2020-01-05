import {
  l, isEmpty, head, tail, cons, reverse,
  toString as pairToString, toString as listToString,
} from '@hexlet/pairs-data';

import { make, append, node, getValue, is, map} from '@hexlet/html-tags';

// BEGIN (write your solution here)
// export const filter = (fn, elems) => {
//   const iter = (currElems, acc) => {
//     if (isEmpty(currElems)) {
//       return reverse(acc);
//     }
//     const elem = head(currElems);
//     const tailElems = tail(currElems);
//     if (fn(elem)) {
//       return iter(tailElems, cons(elem, acc));
//     }
//     return iter(tailElems, acc);
//   };
//   return iter(elems, l());
// };

// teacher solution
export const filter = (fn, elems) => {
  const iter = (currElems, acc) => {
    if (isEmpty(currElems)) {
      return reverse(acc);
    }
    const elem = head(currElems);
    const newAcc = fn(elem) ? cons(elem, acc) : acc;
    return iter(tail(currElems), newAcc);
  };
  return iter(elems, l());
};

export const quotes = (dom) => {
  const isQuote = (elem) => is('blockquote', elem);
  const filtered = filter(isQuote, dom);
  return map(getValue, filtered);
};


// quotes testing
const dom0 = make();
const dom1 = append(dom0, node('h1', 'scheme'));
const dom2 = append(dom1, node('blockquote', 'live is life'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'i am sexy, and i know it'));
console.log(listToString(dom4) + '\n');
console.log(listToString(quotes(dom4)));

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
