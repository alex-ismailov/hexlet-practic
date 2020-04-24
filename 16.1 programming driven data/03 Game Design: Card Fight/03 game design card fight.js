/* Во время инициализации в функцию, создающую игру, передается колода карт и
пользовательская функция random (та, которая выбирает случайную карту из колоды).
Результатом этого вызова будет функция, которая, в свою очередь, запускает игру на выполнение.
Она принимает на вход имена игроков и возвращает лог. Задача этого упражнения - делегировать вызывающему коду
формирование функции random. Другими словами, функция random должна передаваться при инициализации игры. Выглядит это так:

// инициализация
const customRandom = (c) => {
  cardIndex = cardIndex === 0 ? 1 : 0;
  return get(cardIndex, c);
};
const game = make(cards, customRandom);

// игра
const log = game('John', 'Ada');
Такая инверсия позволит нам из недетерминированного кода сделать детерминированный.
В примере выше как раз описывается алгоритм выбора карты, который всегда работает одинаковым способом.

game.js
Создайте и экспортируйте по умолчанию функцию, которая принимает на вход колоду карт и
функцию выбора случайного элемента из списка (списка карт). Второй аргумент — опциональный,
его значение по умолчанию — функция random из @hexlet/pairs-data. Ваша функция будет возвращать другую функцию.
При этом возвращаемая функция работает следующим образом:
принимает на вход имена игроков
запускает игру
возвращет лог игры
Допишите вызов пользовательской функции random в функции run. */

import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    // BEGIN (write your solution here)
    const card = customRandom(cards);
    // END
    const cardName = car(card);
    const damage = cdr(card)(health2);
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

// BEGIN (write your solution here)
export default (cards, customRandom = random) => (name1, name2) => run(name1, name2, cards, customRandom);
// END
