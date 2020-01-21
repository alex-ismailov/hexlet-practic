/* 
  Реализуйте функцию longestLength принимающую на вход строку и возвращающую
  длину максимальной последовательности из неповторяющихся символов.
  Подстрока может состоять из одного символа. Например в строке qweqrty,
  можно выделить следующие подстроки: qwe, weqrty. Самой длинной будет weqrty.
  Экспортируйте функцию по умолчанию.

  Пример
  longestLength('abcdeef'); // 5
  longestLength('jabjcdel'); // 7
  Подсказки
  чтобы проверить, содержит ли массив определённый элемент, используйте метод .includes();
*/

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const findLongestStringInColl = (coll) => {
  let maxLength = coll[0].length; // за основу берем длину первой подстроки
  for (const currSubStr of coll) {
    if (currSubStr.length > maxLength) {
      maxLength = currSubStr.length;
    }
  }
  return maxLength;
};

// откатываем индекс на нам необходимое место в указанном диапозоне str
const indexRollBack = (toChar, fromIndex, str) => {
  for (let i = fromIndex; i > 0; i -= 1) {
    if (str[i] === toChar) {
      /* если не указать i + 1, то мы захватим 1й символ из предыдущей подстроки */
      return i + 1;
    }
  }
  return null;
};

const longestLength = (str) => {
  let acc = []; // здесь копится отдельная подстрока
  const subStrColl = []; // здесь запоминаем все подстроки из строки
  let currIndex = 0; // индексный указатель на текущий символ
  while (currIndex < str.length) { // пока не проверим каждый символ в строке
    if (acc.includes(str[currIndex])) { // конец подстроки, так как найден дубль
      subStrColl.push(acc.join('')); // джойним в обратно строку разделенные символы
      acc = []; // обнуляем аккум-р. Старое содерж. уничтожит сборщик мусора.
      /* откатываем индекс к 1му символу следующей подстроки. Начиная с предыдущего символа,
      иначе если не указать currIndex - 1, то мы продолжим копить строку с текущего индекса */
      currIndex = indexRollBack(str[currIndex], currIndex - 1, str);
    } else { // в противном случае подстрока не кончилась и мы копим её дальше
      acc.push(str[currIndex]);
      currIndex += 1;
    }
  }
  subStrColl.push(acc.join('')); // не забываем про последнию подстроку
  // console.log(subStrColl); // так можно проверить все наши подстроки
  /* находим самую длинную подстроку и возвращаем ее длину */
  return findLongestStringInColl(subStrColl);
};

// // testing
// console.log(longestLength('')); // toBe(0);
// console.log(longestLength('one')); // toBe(3);
// console.log(longestLength('jabjcdel')); // toBe(7);
console.log(longestLength('abcddef')); // toBe(4);
console.log(longestLength('abbccddeffg')); // toBe(3);
console.log(longestLength('abcd')); // toBe(4);
console.log(longestLength('1234561qweqwer')); // toBe(9);
// console.log(longestLength('1234561qweqwerqer')); // toBe(9);

// teacher solution
// const unique = (str) => {
//   const arr = str.split('');
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const char = arr[i];
//     if (!result.includes(char)) {
//       result.push(char);
//     }
//   }

//   return result;
// };

// const isUniqueString = (string) => unique(string).length === string.length;

// const longestLength = (str) => {
//   const len = str.length;

//   for (let i = len - 1; i >= 0; i -= 1) {
//     for (let j = 0; j < len - i; j += 1) {
//       const sub = str.substr(j, i + 1);
//       if (isUniqueString(sub)) {
//         return i + 1;
//       }
//     }
//   }

//   return 0;
// };
