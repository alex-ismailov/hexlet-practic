/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
// export default (company1, company2) => {
//   const keys = Object.keys(company1);
//   for (const key of keys) {
//     if (company1[key] !== company2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

export default (company1, company2) => {
  const keys = Object.keys(company1);
  return keys.every((key) => company1[key] === company2[key]);
};
// END
