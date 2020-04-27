import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import {
  l, cons as consList, isEmpty, head, tail,
} from '@hexlet/pairs-data';
import { attach, typeTag, contents } from '@hexlet/tagged-types';

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const objType = typeTag(obj);
  const iter = (list) => {
    if (isEmpty(list)) {
      return null;
    }
    if (objType === car(head(list))) {
      if (methodName === car(cdr(head(list)))) {
        return contents(cdr(head(list)));
      }
      return iter(tail(list));
    }
    return iter(tail(list));
  };
  return iter(methods);
  // END
};

export const definer = (type) => (methodName, f) => {
  methods = consList(attach(type, cons(methodName, f)), methods);
};
