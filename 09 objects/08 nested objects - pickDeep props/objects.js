/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
// export default (data, keys) => {
//   let acc = data;
//   for (const key of keys) {
//     if (Object.prototype.hasOwnProperty.call(acc, key)) {
//       acc = acc[key];
//     } else {
//       return null;
//     }
//   }
//   return acc;
// };

// Решение Куратора 0xD34F, с Хабр Q&A, link: https://qna.habr.com/q/701487
export default (data, keys) => keys.reduce((acc, key) => (
  acc && Object.prototype.hasOwnProperty.call(acc, key) 
    ? acc[key]
    : null
), data);
// END
