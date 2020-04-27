import { contents } from '@hexlet/tagged-types';
import { getMethod } from './generic';


/* обобщенные функции getName и damage */
export const getName = (self) => getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here) + готово
export const damage = (self, health) => getMethod(self, 'damage')(contents(self), health);
// END