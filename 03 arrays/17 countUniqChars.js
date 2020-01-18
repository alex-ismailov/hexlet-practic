/* 
  Реализуйте и экспортируйте по умолчанию функцию countUniqChars,
  которая получает на вход строку и считает, сколько символов (уникальных символов) использовано в этой строке.
  Например, в строке 'yy' всего один уникальный символ — y. А в строке '111yya!' — четыре уникальных символа: 1, y, a и !.

  Задание необходимо выполнить без использования сторонних библиотек.

  Примеры
  const text1 = 'yyab';
  countUniqChars(text1); // 3

  const text2 = 'You know nothing Jon Snow';
  countUniqChars(text2); // 13

  const text3 = '';
  countUniqChars(text3); // 0
  Примечания
  Если передана пустая строка, то функция должна вернуть 0, так как пустая строка вообще не содержит символов. 
*/

// const countUniqChars = (str) => {
//   const myUniq = (coll) => {
//     const collOfUniqChar = [];
//     for (const item of coll) {
//       if (!collOfUniqChar.includes(item)) {
//         collOfUniqChar.push(item);
//       }
//     }
//     return collOfUniqChar;
//   };
//   const charsColl = str.split('');
//   const uniqCharsColl = myUniq(charsColl);
//   return uniqCharsColl.length;
// };

// teacher solution
const countUniqChars = (str) => {
  const uniqCharsColl = [];
  for (const char of str) {
    if (!uniqCharsColl.includes(char)) {
      uniqCharsColl.push(char);
    }
  }
  return uniqCharsColl.length;
};

// testing
const text1 = 'yyab';
console.log(countUniqChars(text1)); // 3

const text2 = 'You know nothing Jon Snow';
console.log(countUniqChars(text2)); // 13

const text3 = '';
console.log(countUniqChars(text3)); // 0