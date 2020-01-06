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
// END

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>

console.log(htmlToString(extractHeaders(html3)));
// => <p>header1</p><p>header2</p>