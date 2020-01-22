/* Реализуйте и экспортируйте по умолчанию функцию,
которая принимает на вход список и возвращает новый,
состоящий из элементов,у которых такая же чётность, как и у первого элемента входного списка.
Примеры:
sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)
sameParity(l(2, 0, 1, -3, 10, -2)); // (2, 0, 10, -2)
sameParity(l()); // () */

import { /* eslint-disable */
  l, cons as consList, isEmpty, head, tail, toString as listToString
} from '@hexlet/pairs-data';

// BEGIN
const sameParity = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  const firstValue = head(list);
  const isEven = (value) => value % 2 === 0;
  const isRightValue = (currValue) => isEven(firstValue) === isEven(currValue);
  const filterList = (currList) => {
    if (isEmpty(currList)) {
      return l();
    }
    if (isRightValue(head(currList))) {
      return consList(head(currList), filterList(tail(currList)));
    }
    return filterList(tail(currList));
  };
  return consList(firstValue, filterList(tail(list)));
};
// END

// testing
console.log(listToString(sameParity(l(-1, 0, 1, -3, 10, -2)))); // (-1, 1, -3)
console.log(listToString(sameParity(l(2, 0, 1, -3, 10, -2)))); // (2, 0, 10, -2)
console.log(listToString(sameParity(l()))); // ()


