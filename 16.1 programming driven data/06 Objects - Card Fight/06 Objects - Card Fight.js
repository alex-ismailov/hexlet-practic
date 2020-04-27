/* simpleCard.js
Реализуйте интерфейс типа simpleCard.

solution.js
Допишите логику работы функции run.

Подсказки:
-> При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки @hexlet/pairs и
    использовать её для отладки решений. Эта функция возвращает строковое представление пары.
-> При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки @hexlet/pairs-data и
    использовать её для отладки решений. Эта функция возвращает строковое представление списка
-> Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases) */

// eslint-disable
import { cons, car } from '@hexlet/pairs';
import {
  cons as consList, l, random, head, reverse,
} from '@hexlet/pairs-data'; // eslint-enable


const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);
    // BEGIN (write your solution here)
    const cardName = card('getName');
    const damage = card('damage', health2);
    // END
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
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

export default (cards, customRandom = random) => (name1, name2) => (
  run(name1, name2, cards, customRandom)
);
