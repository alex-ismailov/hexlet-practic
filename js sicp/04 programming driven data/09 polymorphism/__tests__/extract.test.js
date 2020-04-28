import { l, toString } from '@hexlet/pairs-data';
import { make } from '../tags';
import extract from '../extract';

test('extract 1', () => {
  expect(extract(l())).toBe(l());
  const tags1 = l(
    make('a', { href: '/about', title: 'about company' }),
    make('img', { src: '/avatar.jpeg', alt: 'my avatar' }),
    make('link', { href: '/favicon.ico', 'data-test': 'custom attribute' }),
  );
  const expected1 = l('/about', '/avatar.jpeg', '/favicon.ico');
  expect(toString(extract(tags1))).toBe(toString(expected1));

  const tags2 = l(
    make('img', { src: '/he.jpg', alt: 'hello' }),
    make('a', { href: '/about' }),
    make('img', { src: '/she.jpg', style: 'width: 80%' }),
  );
  const expected2 = l('/he.jpg', '/about', '/she.jpg');
  expect(toString(extract(tags2))).toBe(toString(expected2));
});
