import { l, cons, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data';

const numbers = l(1, 2, 3, 4, 5);

const has = (list, elem) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === elem) {
    return true;
  }
  return has(tail(list), elem);
};

const reverse = (list) => {
  const iter = (restOfList, acc) => {
    if (isEmpty(restOfList)) {
      return acc;
    }
    return iter(tail(restOfList), cons(head(restOfList), acc));
  }
  if (isEmpty(list)) {
    return l();
  }
  return iter(tail(list), cons(head(list), l()));
};

// teacher solution
const reverse2 = (items) => {
  const iter = (items, acc) => isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc));
  return iter(items, l());
};

const copy = (oldList) => cons(head(oldList), tail(oldList));

const length = (list) => {
  if (isEmpty(list)) {
    return 0;
  }
  return 1 + length(tail(list));
};

const getElement = (list, n) => {
  if (n >= length(list)) {
    return 'item number exceeds list length, try again';
  }
  if (n === 0) {
    return head(list);
  }
  return getElement(tail(list), n - 1);
};

const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return cons(head(list1), concat(tail(list1), list2));
};

const listRef = (items, num) => {
  if (num === 0) {
    return head(items);
  }
  return listRef(tail(items), num - 1);
}

const list1 = l(1, 2, 3, 4, 5);
const list2 = l(1, 2, 3);
const list3 = l();
const listStr = l('one', 'two', 'three', 'four', 'five');
console.log('length(list1) = ' + length(list1));
console.log('length(list2) = ' + length(list2));
console.log('length(list3) = ' + length(list3));

console.log(getElement(list1, 4));
console.log(getElement(listStr, 0));
console.log(getElement(listStr, 4));
console.log(getElement(listStr, 1));
console.log(getElement(listStr, 5));

console.log(listRef(list1, 3));

console.log(listToString(reverse2(list1)));