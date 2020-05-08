import { render, parse } from '../ast';

describe('HtmlBuilder my tests', () => {
  const dslData = ['html', [
    ['head', [
      ['title', 'hello, Hexlet title!'],
    ]],
    ['body', { class: 'container' }, [
      ['h1', { class: 'header' }, 'html builder, Header'],
      ['div', [
        ['span', { class: 'spanElem1' }, 'span text'],
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
                attributes: { class: 'spanElem1' },
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
    ],
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
            attributes: { class: 'spanElem1' },
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

  test('parse simple test', () => {
    expect(parse(dslData1)).toEqual(AST1);
  });
  test('parse test', () => {
    expect(parse(dslData)).toEqual(AST);
  });
  test('render simple test', () => {
    expect(render(AST1)).toBe('<html><div><span class="spanElem1">span text</span><span>span text 2</span></div></html>');
  });
  test('render test', () => {
    expect(render(AST)).toBe('<html><head><title>hello, Hexlet title!</title></head><body class="container"><h1 class="header">html builder, Header</h1><div><span class="spanElem1">span text</span><span>span text 2</span></div></body></html>');
  });
});

describe('HtmlBuilder Hexlet Tests', () => {
  it('set 1', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', { class: 'container' }, [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span', 'span text2'],
          ['br'],
        ]],
      ]],
    ]];

    const actual = render(parse(data));
    const expected = '<html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span>span text2</span><br></div></body></html>';
    expect(actual).toBe(expected);
  });

  it('set 2', () => {
    const data = ['html', [
      ['body', [
        ['h2', { class: 'header' }, 'first header'],
        ['img', { class: 'picture', src: 'smile.jpg' }],
        ['div', [
          ['p', 'hello, world'],
          ['p', 'good bye, world'],
          ['a', { class: 'link', href: 'https://hexlet.io' }, 'hexlet.io'],
        ]],
      ]],
    ]];

    const actual = render(parse(data));
    const expected = '<html><body><h2 class="header">first header</h2><img class="picture" src="smile.jpg"><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>';
    expect(actual).toBe(expected);
  });
});
