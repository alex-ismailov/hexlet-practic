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

const reverse = (list) => {
  const iter = (list, acc) => {
    if(tail(list) === null) {
      return l(`${head(list)}${acc}`);
    }
    return iter(tail(list), `, ${head(list)}${acc}`);
  }
  return iter(list, '');
};

const list1 = l(13, 15, 17);
const list2 = l(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(listToString(reverse(list1)));
console.log(listToString(reverse(list2)));

// const str = '13, 15, 17';
// console.log(listToString(l(str)));

// console.log(listToString(head(tail(numbers))));

// console.log(has(numbers, 1));

// console.log(head(numbers));
// console.log(tail(tail(tail(tail(tail(numbers))))));
// console.log(tail(numbers));
