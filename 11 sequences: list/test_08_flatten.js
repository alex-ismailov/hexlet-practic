import { l, reverse, toString as listToString, isList, cons, reduce, concat, head, tail } from '@hexlet/pairs-data'; // eslint-disable-line

/* 
  Реализуйте и экспортируйте по умолчанию функцию flatten,
  которая делает плоским вложенный список.
  const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

  flatten(list); // (1, 2, 3, 5, 4, 3, 2) 
*/

const flatten = (list) => {
  const isLeaf = (elem, acc) => {
    if (isList(elem)) {
      return concat(flatten(elem), acc);
    }
    return cons(elem, acc);
  };
  return reduce(isLeaf, l(), reverse(list));
};

// testing
const list2 = l();
console.log('() = ' + listToString(flatten(list2)));

const list3 = l(1, 2, l(3, 5), l(l(4, 3), 2));
console.log('(1, 2, 3, 5, 4, 3, 2) = ' + listToString(flatten(list3)));

const list4 = l(l(1, l(5), l(), l(l(-3, 'hi'))), 'string', 10, l(l(l(5))));
console.log('(1, 5, -3, hi, string, 10, 5) = ' + listToString(flatten(list4)));