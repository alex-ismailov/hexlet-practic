import parse from '../solution';
import PairedTag from '../PairedTag';
import SingleTag from '../SingleTag';

describe('HtmlBuilder', () => {
  it('#parse', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span', 'span text'],
          ['hr'],
        ]],
      ]],
    ]];

    const ast = parse(data);
    const expected = new PairedTag('html', {}, '', [
      new PairedTag('head', {}, '', [
        new PairedTag('title', {}, 'hello, hexlet!'),
      ]),
      new PairedTag('body', {}, '', [
        new PairedTag('h1', { class: 'header' }, 'html builder example'),
        new PairedTag('div', {}, '', [
          new PairedTag('span', {}, 'span text'),
          new SingleTag('hr'),
        ]),
      ]),
    ]);

    expect(ast).toEqual(expected);
  });

  it('#toString', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['div', { class: 'separator' }],
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['img', { class: 'image', href: '#' }],
          ['span', 'span text2'],
        ]],
      ]],
    ]];

    const ast = parse(data);
    const expected = '<html><head><title>hello, hexlet!</title></head><body><div class="separator"></div><h1 class="header">html builder example</h1><div><img class="image" href="#"><span>span text2</span></div></body></html>';
    expect(ast.toString()).toEqual(expected);
  });
});
