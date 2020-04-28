/* simpleCard.js
Реализуйте интерфейс simpleCard, основываясь на реализации percentCard.

solution.js
Функция run реализована только частично — допишите логику её работы.

В прошлых практиках отдельные элементы лога мы формировали с помощью пар: cons(cons(health1, health2), message).
Сейчас же каждый элемент лога сформируйте с помощью типа данных object со свойствами health1, health2 и message.
Таким образом, итоговый log должен содержать список объектов. */

import { cons as consList, l, random, head, reverse, toString as listToString, length } from '@hexlet/pairs-data'; // eslint-disable-line

const run = (player1, player2, cards, customRandom) => {
  // BEGIN (write your solution here)
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const message = `${name1} был убит`;
      const previouslog = head(log);
      const resLog = {
        ...previouslog,
        message,
      };
      return consList(resLog, log);
    }

    const card = customRandom(cards);
    const cardName = card.name;
    const damage = card.damage(health2);
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
    const stats = { message };
    if (order === 1) {
      stats.health1 = health1;
      stats.health2 = newHealth;
    } else if (order === 2) {
      stats.health1 = newHealth;
      stats.health2 = health1;
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };
  // END

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => (
  (name1, name2) => run(name1, name2, cards, customRandom)
);
