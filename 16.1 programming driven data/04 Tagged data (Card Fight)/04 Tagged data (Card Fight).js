/* Реализуйте интерфейс работы карты с типом SimpleCard по аналогии с
типом PercentCard. Второй параметр у конструктора урон.
simpleCard.make('Жесткий ломатель мироздания', 6);

solution.js
Реализуйте логику работы функции run.

Подсказки
Для определения типа карты воспользуйтесь функциями
isSimpleCard и/или isPercentCard. */

import { cons, car, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line
import { typeTag } from '@hexlet/tagged-types';
import { getName as getSimpleCardName, damage as simpleCardDamage } from './simpleCard';
import { getName as getPercentCardName, damage as percentCardDamage } from './percentCard';

const isSimpleCard = (card) => typeTag(card) === 'SimpleCard';
const isPercentCard = (card) => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);

    let cardName;
    let damage;

    // Populate cardName and damage using suitable card
    // use imports from  percentCard.js and simpleCard.js
    // BEGIN (write your solution here)
    if (isSimpleCard(card)) {
      cardName = getSimpleCardName(card);
      damage = simpleCardDamage(card);
    } else if(isPercentCard(card)) {
      cardName = getPercentCardName(card);
      damage = percentCardDamage(card, health2);
    }
    // END

    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => {
  const inner = (name1, name2) => run(name1, name2, cards, customRandom);
  return inner;
};
