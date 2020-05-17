/* timer.js
Реализуйте таймер в виде промиса.

import wait from './timer.js';

wait(100).then(() => console.log('time is over!'));
Экспортируйте функцию по умолчанию. */

// BEGIN (write your solution here)
// const wait = (ms) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });

//   return promise;
// };

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default wait;
// END
