import { car, cdr, toString as pairToString } from '@hexlet/pairs';
import { l, length, get } from '@hexlet/pairs-data';
import SimpleCard from '../simpleCard';
import PercentCard from '../percentCard';
import make from '../solution';

describe('CardGame', () => {
  it('#flow 1', () => {
    const cards = l(SimpleCard('Королевский хлыст шанса', 6));
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(pairToString(car(step1))).toBe('(10, 10)');

    const step2 = get(1, log);
    expect(pairToString(car(step2))).toBe('(10, 4)');
    expect(cdr(step2)).toBe(`Игрок 'John' применил 'Королевский хлыст шанса'
      против 'Ada' и нанес урон '6'`);

    const step3 = get(2, log);
    expect(pairToString(car(step3))).toBe('(4, 4)');

    const step4 = get(3, log);
    expect(pairToString(car(step4))).toBe('(4, -2)');

    const step5 = get(4, log);
    expect(pairToString(car(step5))).toBe('(4, -2)');
  });

  it('#flow 2', () => {
    let cardIndex = 2;
    const cards = l(
      SimpleCard('Бул-Катосова награда издёвки', 7),
      PercentCard('Покрытый царапинами клык демона коряги', 80),
    );
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
    expect(cdr(step3)).toBe(`Игрок 'Ada' применил 'Покрытый царапинами клык демона коряги'
      против 'John' и нанес урон '8'`);

    const step4 = get(3, log);
    expect(pairToString(car(step4))).toBe('(2, -4)');

    const step5 = get(4, log);
    expect(pairToString(car(step5))).toBe('(2, -4)');
  });
});
