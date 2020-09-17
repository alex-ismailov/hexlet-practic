import prettify from '../prettify.js';

test('prettify 1', () => {
  const expected = '<p>Text</p>';
  document.documentElement.innerHTML = expected;
  prettify(document);
  expect(document.body.innerHTML).toEqual(expected);
});

test('prettify 2', () => {
  const expected = '<div><p>Text</p></div>';
  document.documentElement.innerHTML = '<div>Text</div>';
  prettify(document);
  expect(document.body.innerHTML).toEqual(expected);
});

test('prettify 3', () => {
  const expected = 'Text<div><div><p>Text</p></div><p>Op</p></div><div><p>My</p></div>';
  document.documentElement.innerHTML = 'Text<div><div>Text</div><p>Op</p></div><div>My</div>';
  prettify(document);
  expect(document.body.innerHTML).toEqual(expected);
});

test('prettify 4', () => {
  const expected = `Text
  <div>
    <div><p>Text</p></div>
    <p>Op</p>
  </div>
  <div><p>My</p></div>`;
  document.documentElement.innerHTML = `Text
  <div>
    <div>Text</div>
    <p>Op</p>
  </div>
  <div>My</div>`;
  prettify(document);
  expect(document.body.innerHTML).toEqual(expected);
});

test('prettify 5', () => {
  const expected = `Text
  <div>
    <div><p>complex</p><div><p>test</p></div></div>
    <div><p>Text</p></div>
    <p>Op</p>
  </div>
  <div><p>My</p></div>`;
  document.documentElement.innerHTML = `Text
  <div>
    <div>complex<div>test</div></div>
    <div>Text</div>
    <p>Op</p>
  </div>
  <div>My</div>`;
  prettify(document);
  expect(document.body.innerHTML).toEqual(expected);
});

test('prettify 6', () => {
  const expected = '<div><p>text1</p><p>something</p><p>text2</p></div>';
  document.documentElement.innerHTML = '<div>text1<p>something</p>text2</div>';
  prettify(document);
  expect(document.body.innerHTML).toEqual(expected);
});
