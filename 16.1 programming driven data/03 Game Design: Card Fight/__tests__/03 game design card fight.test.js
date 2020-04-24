import { car, cons, toString as pairToString } from '@hexlet/pairs';
// function get: `get(index, list)`
import { l, length, get } from '@hexlet/pairs-data';
import make from '../03 game design card fight';

const cards = l(
  cons('Костяная кочерга гробницы', () => 7),
  cons('Памятный металл палача', (health) => Math.round(health * 0.8)),
);

test('CardGame', () => {
  let cardIndex = 1;
  const game = make(cards, (c) => {
    cardIndex = cardIndex === 0 ? 1 : 0;
    return get(cardIndex, c);
  });
  const log = game('John', 'Ada');

  expect(length(log)).toBe(5);

  const step1 = get(0, log);
  expect(pairToString(car(step1))).toBe('(10, 10)');

  const step2 = get(1, log);
  expect(pairToString(car(step2))).toBe('(10, 3)');

  const step3 = get(2, log);
  expect(pairToString(car(step3))).toBe('(2, 3)');

  const step4 = get(3, log);
  expect(pairToString(car(step4))).toBe('(2, -4)');

  const step5 = get(4, log);
  expect(pairToString(car(step5))).toBe('(2, -4)');
});

test('default', () => {
  const game = make(cards);
  const log = game('John', 'Ada');
  expect(log).not.toBeUndefined();
});
