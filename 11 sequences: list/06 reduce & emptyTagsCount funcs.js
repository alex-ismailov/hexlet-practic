import { isEmpty, head, tail } from '@hexlet/pairs-data';
import { node, append, make, getValue, is } from '@hexlet/html-tags';

export const reduce = (fn, firstAcc, items) => {
  const iter = (currItems, acc) => {
    if (isEmpty(currItems)) {
      return acc;
    }
    const elem = head(currItems);
    const newAcc = fn(elem, acc);
    return iter(tail(currItems), newAcc);
  };
  return iter(items, firstAcc);
};

export const emptyTagsCount = (tag, dom) => {
  const isEmptyTag = (elem, acc) => (
    is(tag, elem) && !getValue(elem) ? acc + 1 : acc
  );
  return reduce(isEmptyTag, 0, dom);
};

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
