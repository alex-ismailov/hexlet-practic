import getLinks from '../html.js';

describe('getLinks', () => {
  it('test 1', () => {
    const tags = [];
    const links = getLinks(tags);

    const expected = [];
    expect(links).toEqual(expected);
  });

  it('test 2', () => {
    const tags = [
      { name: 'p' },
      { name: 'a', href: 'hexlet.io' },
      { name: 'img', src: 'hexlet.io/assets/logo.png' },
    ];
    const links = getLinks(tags);

    const expected = [
      'hexlet.io',
      'hexlet.io/assets/logo.png',
    ];
    expect(links).toEqual(expected);
  });

  it('test 3', () => {
    const tags = [
      { name: 'img', src: 'hexlet.io/assets/logo.png' },
      { name: 'div' },
      { name: 'link', href: 'hexlet.io/assets/style.css' },
      { name: 'h1' },
    ];
    const links = getLinks(tags);

    const expected = [
      'hexlet.io/assets/logo.png',
      'hexlet.io/assets/style.css',
    ];
    expect(links).toEqual(expected);
  });

  it('test 4', () => {
    const tags = [
      { name: 'invalidTag', src: 'hexlet.io/assets/invalid.png' },
      { name: 'img', src: 'hexlet.io/assets/logo.png' },
      { name: 'div' },
      { name: 'link', href: 'hexlet.io/assets/style.css' },
      { name: 'h1' },
    ];
    const links = getLinks(tags);

    const expected = [
      'hexlet.io/assets/logo.png',
      'hexlet.io/assets/style.css',
    ];
    expect(links).toEqual(expected);
  });
});
