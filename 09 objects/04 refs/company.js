/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
/* Pass tests from 1 to 5 */
// export default (company1, company2) => {
//   const keys = Object.keys(company1);
//   for (const key of keys) {
//     if (company1[key] !== company2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

/* Pass tests from 1 to 5 */
// export default (company1, company2) => {
//   const keys = Object.keys(company1);
//   return keys.every((key) => company1[key] === company2[key]);
// };

/* Pass all tests */
const deppEqual = (company1, company2) => {
  const company1Keys = Object.keys(company1);
  const company2Keys = Object.keys(company2);
  if (company1Keys.length !== company2Keys.length) {
    return false;
  }

  return company1Keys.every((key) => {
    if (typeof company1[key] === 'object' && typeof company2[key] === 'object') {
      return deppEqual(company1[key], company2[key]);
    }
    return company1[key] === company2[key];
  });
};

export default deppEqual;
// END
