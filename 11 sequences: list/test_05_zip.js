/* 
Напишите и экспортируйте по умолчанию функцию zip,
которая принимает на вход два списка и возвращает третий,
в котором каждый элемент это список элементов исходных списков, стоящих на тех же позициях.

Примеры
const list1 = l(1, 5, 3, 8, 9);
const list2 = l(2, 3, 2, 1);
const result = zip(list1, list2); //  ((1, 2), (5, 3), (3, 2), (8, 1))

const list1 = l(1, 2, 3);
const list2 = l();
const result = zip(list1, list2); // ()
*/

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line

// With inner iter function (linear iterative process)
const zip = (list1, list2) => {
  const iter = (currList1, currList2, acc) => {
    if (isEmpty(currList1) || isEmpty(currList2)) {
      return reverse(acc);
    }
    return iter(
      tail(currList1),
      tail(currList2),
      cons(l(head(currList1), head(currList2)), acc),
    );
  };
  return iter(list1, list2, l());
};

// linear recursive process
// const zip = (list1, list2) => {
//   if (isEmpty(list1) || isEmpty(list2)) {
//     return l();
//   }
//   const current = l(head(list1), head(list2));
//   return cons(current, zip(tail(list1), tail(list2)));
// };

// testing
const list1 = l(1, 5, 3, 8, 9);
const list2 = l(2, 3, 2, 1);
console.log(listToString(zip(list1, list2)));

const list3 = l(2, 3, 2, 1);
const list4 = l(1, 5, 3, 8, 9);
console.log(listToString(zip(list3, list4)));

const list5 = l(8, 3, 5, 1);
const list6 = l(1, 2, 3, 2);
console.log(listToString(zip(list5, list6)));

const list7 = l(1, 2, 3);
const list8 = l();
console.log(listToString(zip(list7, list8)));
