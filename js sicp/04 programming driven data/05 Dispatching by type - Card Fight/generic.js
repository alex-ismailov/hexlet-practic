import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import {
  l, cons as consList, isEmpty, head, tail,
} from '@hexlet/pairs-data';
import { attach, typeTag, contents } from '@hexlet/tagged-types';

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const searchedObjType = typeTag(obj);
  const iter = (methodsList) => {
    if (isEmpty(methodsList)) {
      return null;
    }
    const methodsListItem = head(methodsList);
    if (searchedObjType === typeTag(methodsListItem)) {
      if (methodName === car(contents(methodsListItem))) {
        return cdr(contents(methodsListItem));
      }
    }
    return iter(tail(methodsList));
  };
  return iter(methods);
  // END
};

export const definer = (type) => (methodName, f) => {
  methods = consList(attach(type, cons(methodName, f)), methods);
};
