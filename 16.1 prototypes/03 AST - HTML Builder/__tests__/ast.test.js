import HtmlBuilder from '../ast';
import { deepEqual } from 'power-assert';

describe('HtmlBuilder', () => {
  const dslData = ['html', [
    ['head', [
      ['title', 'hello, Hexlet title!'],
    ]],
    ['body', { class: 'container' }, [
      ['h1', { class: 'header' }, 'html builder, Header'],
      ['div', [
        ['span', 'span text'],
        ['span', 'span text 2'],
      ]],
    ]],
  ]];
  const AST = {
    name: 'html',
    attributes: {},
    body: '',
    children: [
      {
        name: 'head',
        attributes: {},
        body: '',
        children: [
          {
            name: 'title',
            attributes: {},
            body: 'hello, Hexlet title!',
            children: [],
          },
        ],
      },
      {
        name: 'body',
        attributes: { class: 'container' },
        body: '',
        children: [
          {
            name: 'h1',
            attributes: { class: 'header' },
            body: 'html builder, Header',
            children: [],
          },
          {
            name: 'div',
            attributes: {},
            body: '',
            children: [
              {
                name: 'span',
                attributes: {},
                body: 'span text',
                children: [],
              },
              {
                name: 'span',
                attributes: {},
                body: 'span text 2',
                children: [],
              },
            ],
          },
        ],
      },
    ]
  };
  const dslData1 = ['html', [
    ['div', [
      ['span', { class: 'spanElem1' }, 'span text'],
      ['span', 'span text 2'],
    ]],
  ]];

  const AST1 = {
    name: 'html',
    attributes: {},
    body: '',
    children: [
      {
        name: 'div',
        attributes: {},
        body: '',
        children: [
          {
            name: 'span',
            attributes: { class: 'spanElem1'},
            body: 'span text',
            children: [],
          },
          {
            name: 'span',
            attributes: {},
            body: 'span text 2',
            children: [],
          },
        ],
      },
    ],
  };

  // test('parse simple test', () => {
  //   expect(HtmlBuilder.parse(dslData1)).toEqual(AST1);
  // });
  // test('parse test', () => {
  //   expect(HtmlBuilder.parse(dslData)).toEqual(AST);
  // });
  test('render simple test', () => {
    expect(HtmlBuilder.render(AST1)).toBe('<html><div><span class="spanElem1">span text</span><span>span text 2</span></div></html>');
  });
  test('render simple test', () => {
    expect(HtmlBuilder.render(AST)).toBe('<html><div><span class="spanElem1">span text</span><span>span text 2</span></div></html>');
  });
});