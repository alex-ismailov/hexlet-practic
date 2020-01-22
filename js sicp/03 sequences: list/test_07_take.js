import { l, isEmpty, head, tail, cons, toString as listToString } from '@hexlet/pairs-data';

/* 
  Реализуйте и экспортируйте по умолчанию функцию take,которая возвращает список,
  состоящий из первых n (значение передается первым параметром) элементов
  исходного (переданного вторым параметром) списка. 
  Остальные детали работы функции демонстрирует нижеприведённый код:
  take(3, l()); // ()
  take(3, l(1, 2)); // (1, 2)
  take(1, l(7, 2)); // (7)
  Подсказки
  Используйте рекурсивный процесс 
*/

// linear recursive process
const take = (n, list) => {
  if (n === 0 || isEmpty(list)) {
    return l();
  }
  return cons(head(list), take(n - 1, tail(list)));
};

// tetsting
console.log(listToString(take(3, l()))); // ()
console.log(listToString(take(3, l(1, 2)))); // (1, 2)
console.log(listToString(take(1, l(7, 2)))); // (7)