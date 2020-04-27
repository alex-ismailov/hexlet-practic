import { contents } from '@hexlet/tagged-types';
import { getMethod } from './generic';


/* обобщенные функции getName и damage */
export const getName = (self) => getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here) + готово
export const damage = (card, health) => getMethod(card, 'damage')(contents(card), health);
// END