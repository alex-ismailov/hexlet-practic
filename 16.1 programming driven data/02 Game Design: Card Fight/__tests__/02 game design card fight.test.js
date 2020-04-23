import { cons, car, toString as pairToString } from '@hexlet/pairs';
import { l, length, get } from '@hexlet/pairs-data';
import make from '../02 game design card fight';

describe('CardGame', () => {
  it('should work 1', () => {
    const cards = l(cons('Костяная кочерга гробницы', () => 6));
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

  it('should work 2', () => {
    const cards = l(cons('Разъяряющая осада отчаяния', () => 5));
    const game = make(cards);
    const log = game('Mike', 'Alan');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(pairToString(car(step1))).toBe('(10, 10)');

    const step2 = get(1, log);
    expect(pairToString(car(step2))).toBe('(10, 5)');

    const step3 = get(2, log);
    expect(pairToString(car(step3))).toBe('(5, 5)');

    const step4 = get(3, log);
    expect(pairToString(car(step4))).toBe('(5, 0)');

    const step5 = get(4, log);
    expect(pairToString(car(step5))).toBe('(5, 0)');
  });
});
