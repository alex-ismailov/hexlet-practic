import search from '../src-search.js';

beforeAll(() => {
  document.documentElement.innerHTML = `
    <head>
      <title>Hello, World</title>
    </head>
    <body>
      New
      <div>
        <h1>Start</h1>
        <div>
          <h2>Continue</h2>
        </div>
      </div>
      <p>Paragraph</p>
      <table>
        <tr>
          <th>1</th>
          <th>2</th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>li</li>
              <li>li</li>
              <li>li</li>
            </ul>
          </td>
          <td>
            <p>Paragraph 2</p>
          </td>
        </tr>
      </table>
      <ul>
        <li>li</li>
      </ul>
    </body>
  `;
});

test('search', () => {
  expect(search(document, 'html')).toEqual([document.documentElement]);
  expect(search(document, 'td')).toHaveLength(2);
  expect(search(document, 'ul')).toHaveLength(2);
  expect(search(document, 'li')).toHaveLength(4);
  expect(search(document, 'div')).toHaveLength(2);
  expect(search(document, 'title')).toEqual([document.head.firstElementChild]);
});
