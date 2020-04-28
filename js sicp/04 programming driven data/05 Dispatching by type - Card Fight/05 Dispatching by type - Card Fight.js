import { cons, car, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line no-unused-vars
import { // eslint-disable-next-line no-unused-vars
  cons as consList, l, random, head, reverse, toString as listToString,
} from '@hexlet/pairs-data';
import { getName, damage } from './card';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);
    const cardName = getName(card);
    const points = damage(card, health2);
    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
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

export default (cards, customRandom = random) => (
  (name1, name2) => run(name1, name2, cards, customRandom)
);
