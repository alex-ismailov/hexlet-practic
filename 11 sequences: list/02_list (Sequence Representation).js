import { l, cons, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data';

const numbers = l(1, 2, 3, 4, 5);

const has = (list, elem) => {
  if (head(list) === elem) {
    return true;
  }
  if (isEmpty(tail(list))) {
    return false;
  }
  return has(tail(list), elem);
};

const reverse = (list) => {
  const iter = (list, acc) => {
    if (isEmpty(tail(list))) {
      return cons(head(list), acc);
    }
    return iter(tail(list), cons(head(list), acc));
  }
  return iter(tail(list), cons(head(list), l()));
};


const list1 = l(1, 2, 3, 4, 5);
console.log(listToString(list1));
const revList = reverse(list1);
console.log(listToString(revList));

console.log(listToString(tail(tail(tail(tail(revList))))));
console.log(listToString(tail(tail(tail(revList)))));
console.log(listToString(tail(tail(revList))));
console.log(listToString(tail(revList)));
