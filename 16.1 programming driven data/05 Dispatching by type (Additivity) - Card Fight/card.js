import { contents } from '@hexlet/tagged-types';
import { getMethod } from './generic';

export const getName = (self) => getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)
export const damage = (card, health) => {
  
}
// END