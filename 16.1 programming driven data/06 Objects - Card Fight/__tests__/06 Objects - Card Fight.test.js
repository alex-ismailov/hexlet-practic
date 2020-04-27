import { car, cdr, toString as pairToString } from '@hexlet/pairs';
import { l, length, get } from '@hexlet/pairs-data';
import simpleCard from '../simpleCard';
import percentCard from '../percentCard';
import make from '../06 Objects - Card Fight';

describe('CardGame', () => {
  it('#flow 1', () => {
    const cards = l(simpleCard('Королевский хлыст шанса', 6));
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(pairToString(car(step1))).toBe('(10, 10)');

    const step2 = get(1, log);
    expect(pairToString(car(step2))).toBe('(10, 4)');

    const step3 = get(2, log);
    expect(pairToString(car(step3))).toBe('(4, 4)');

    const step4 = get(3, log);
    expect(pairToString(car(step4))).toBe('(4, -2)');

    const step5 = get(4, log);
    expect(pairToString(car(step5))).toBe('(4, -2)');
  });

  it('#flow 2', () => {
    let cardIndex = 1;
    const cards = l(
      simpleCard('Бул-Катосова награда издёвки', 4),
      percentCard('Покрытый царапинами клык демона коряги', 50),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(7);

    const step1 = get(0, log);
    expect(pairToString(car(step1))).toBe('(10, 10)');

    const step2 = get(1, log);
    expect(pairToString(car(step2))).toBe('(10, 6)');

    const step3 = get(2, log);
    expect(pairToString(car(step3))).toBe('(5, 6)');
    expect(cdr(step3)).toBe("Игрок 'Ada' применил 'Покрытый царапинами клык демона коряги' против 'John' и нанес урон '5'");

    const step4 = get(3, log);
    expect(pairToString(car(step4))).toBe('(5, 2)');

    const step5 = get(4, log);
    expect(pairToString(car(step5))).toBe('(2, 2)');

    const step6 = get(5, log);
    expect(pairToString(car(step6))).toBe('(2, -2)');

    const step7 = get(6, log);
    expect(pairToString(car(step7))).toBe('(2, -2)');
  });
});
