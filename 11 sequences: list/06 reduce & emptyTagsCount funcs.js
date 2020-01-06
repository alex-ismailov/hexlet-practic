import { isEmpty, head, tail } from '@hexlet/pairs-data';
import { node, append, make, getValue, is } from '@hexlet/html-tags';

// linear iterative procces
// export const reduce = (fn, firstAcc, items) => {
//   const iter = (currItems, acc) => {
//     if (isEmpty(currItems)) {
//       return acc;
//     }
//     const elem = head(currItems);
//     const newAcc = fn(elem, acc);
//     return iter(tail(currItems), newAcc);
//   };
//   return iter(items, firstAcc);
// };

//linear recursive process, teacher solution
export const reduce = (fn, acc, items) => {
  if (isEmpty(items)) {
    return acc;
  }
  return reduce(fn, fn(head(items), acc), tail(items));
};

export const emptyTagsCount = (tag, dom) => {
  const counter = (elem, acc) => (
    is(tag, elem) && !getValue(elem) ? acc + 1 : acc
  );
  return reduce(counter, 0, dom);
};

// teacher solution
// export const emptyTagsCount = (tag, items) => {
//   const predicate = (elem) => is(tag, elem) && getValue(elem) === '';
//   const func = (item, acc) => predicate(item) ? acc + 1 : acc;
//   return reduce(func, 0, items);
// };

// reduce testing:
const dom1 = append(make(), node('h1', 'header1'));
const dom2 = append(dom1, node('h1', 'header2'));
const dom3 = append(dom2, node('p', 'content'));
const res = reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, dom3);
console.log('the number of tags h1 = ' + res); // 2

// emptyTagsCount testing:
const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));

console.log('emptyTagsCount(\'blockquote\', html6) = ' + emptyTagsCount('blockquote', html6)); // 2
