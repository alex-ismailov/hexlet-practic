/* 
  Реализуйте и экспортируйте по умолчанию функцию lengthOfLastWord,
  которая возвращает длину последнего слова переданной на вход строки. 
  Словом считается любая последовательность, не содержащая пробелов.

  lengthOfLastWord(''); // 0
  lengthOfLastWord('man in BlacK'); // 5
  lengthOfLastWord('hello, world!  '); // 6
*/

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// const lengthOfLastWord = (str) => {
//   if (str.length === 0) {
//     return 0;
//   }
//   const collOfStringElems = str.split(' ');
//   const collOfWords = [];
//   for (const items of collOfStringElems) {
//     if (items !== '') {
//       collOfWords.push(items);
//     }
//   }
//   const lastWord = collOfWords[collOfWords.length - 1];
//   return lastWord.length;
// };

// teacher solution
const lengthOfLastWord = (str) => {
  if (str.length === 0) {
    return 0;
  }
  const collOfWords = str.trim().split(' ');
  const lastWord = collOfWords[collOfWords.length - 1];
  return lastWord.length;
};

// testing
console.log(lengthOfLastWord('')); // 0
console.log(lengthOfLastWord('man in BlacK')); // 5
console.log(lengthOfLastWord('hello, world!  ')); // 6
