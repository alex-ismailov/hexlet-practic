import { l, cons, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data';

const numbers = l(1, 2, 3, 4, 5);

const has = (list, elem) => {
  if (head(list) === elem) {
    return true;
  }
  if (tail(list) === null) {
    return false;
  }
  return has(tail(list), elem);
};

// console.log(listToString(head(tail(numbers))));

console.log(has(numbers, 1));

// console.log(head(numbers));
// console.log(tail(tail(tail(tail(tail(numbers))))));
// console.log(tail(numbers));
