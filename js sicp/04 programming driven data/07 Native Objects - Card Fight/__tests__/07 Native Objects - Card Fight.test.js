import { l, length, get } from '@hexlet/pairs-data';
import simpleCard from '../simpleCard';
import percentCard from '../percentCard';
import make from '../07 Native Objects - Card Fight';

describe('CardGame', () => {
  it('#flow 1', () => {
    const cards = l(simpleCard('Королевский хлыст шанса', 5));
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(5);

    const step3 = get(2, log);
    expect(step3.health1).toBe(5);
    expect(step3.health2).toBe(5);

    const step4 = get(3, log);
    expect(step4.health1).toBe(5);
    expect(step4.health2).toBe(0);

    const step5 = get(4, log);
    expect(step5.health1).toBe(5);
    expect(step5.health2).toBe(0);
  });

  it('#flow 2', () => {
    let cardIndex = 2;
    const cards = l(
      simpleCard('Бул-Катосова награда издёвки', 7),
      percentCard('Покрытый царапинами клык демона коряги', 80),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(3);

    const step3 = get(2, log);
    expect(step3.health1).toBe(2);
    expect(step3.health2).toBe(3);

    const step4 = get(3, log);
    expect(step4.health1).toBe(2);
    expect(step4.health2).toBe(-4);

    const step5 = get(4, log);
    expect(step5.health1).toBe(2);
    expect(step5.health2).toBe(-4);
  });

  it('#flow 3 (health order in log)', () => {
    let cardIndex = 2;
    const cards = l(
      simpleCard('Бул-Катосова награда издёвки', 3),
      simpleCard('Покрытый царапинами клык демона коряги', 10),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(4);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(7);

    const step3 = get(2, log);
    expect(step3.health1).toBe(0);
    expect(step3.health2).toBe(7);

    const step4 = get(3, log);
    expect(step4.health1).toBe(0);
    expect(step4.health2).toBe(7);
  });
});
