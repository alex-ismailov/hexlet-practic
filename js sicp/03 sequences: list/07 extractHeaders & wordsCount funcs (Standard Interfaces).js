import {
  node, append, make, getValue, is, map, filter, reduce, toString as htmlToString,
} from '@hexlet/html-tags';

export const identity = (word) => word;

export const wc = (word, text) => {
  const re = new RegExp(word, 'g');
  return (text.match(re) || []).length;
};

// BEGIN (write your solution here)
export const extractHeaders = (html) => {
  const html2 = filter((item) => is('h2', item), html);
  const html3 = map((item) => node('p', getValue(item)), html2);
  return html3;
};

export const wordsCount = (tag, word, html) => (
  reduce((item, acc) => (
    is(tag, item) ? acc + wc(word, getValue(item)) : acc
  ), 0, html)
);

// Teacher solution
// export const wordsCount = (tagName, word, elements) => {
//   const filtered = filter((element) => is(tagName, element), elements);
//   const values = map(getValue, filtered);
//   return reduce((text, acc) => wc(word, text) + acc, 0, values);
// };
// END

// *** extractHeaders testing ***
const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>
console.log(htmlToString(extractHeaders(html3)));
// => <p>header1</p><p>header2</p>

// wordsCount testing
const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('h2', 'haskell'));
const dom5 = append(dom4, node('p', 'is a functional language'));
const dom6 = append(dom5, node('h2', 'prolog'));
const dom7 = append(dom6, node('p', 'sicp'));
const dom8 = append(dom7, node('blockquote', 'haskell haskell'));
const dom9 = append(dom8, node('blockquote', 'quote'));
const dom10 = append(dom9, node('h2', 'haskell'));
const dom = append(dom10, node('p', 'is about logic haskell'));

console.log(wordsCount('i', 'scheme', dom)); // toBe(0);
console.log(wordsCount('h1', 'undefined', dom)); // toBe(0);
console.log(wordsCount('h1', 'scheme', dom)); // toBe(1);
console.log(wordsCount('blockquote', 'haskell', dom)); // toBe(2);
console.log(wordsCount('h2', 'haskell', dom)); // toBe(2);
console.log(wordsCount('h2', 'h2', dom)); // toBe(0);