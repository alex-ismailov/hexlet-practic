/* 
  Реализуйте и экспортируйте по умолчанию функцию makeCensored,
  которая заменяет каждое вхождение указанных слов в предложении на
  последовательность $#%! и возвращает полученную строку. Аргументы:

  - Текст
  - Набор стоп слов

  Словом считается любая непрерывная последовательность символов,
  включая любые спецсимволы (без пробелов).

  Примеры
  import makeCensored from '../strings';

  const sentence = 'When you play the game of thrones, you win or you die';
  const resArr = makeCensored(sentence, ['die', 'play']);
  // When you $#%! the game of thrones, you win or you $#%!

  const sentence2 = 'chicken chicken? chicken! chicken';
  const resArr2 = makeCensored(sentence2, ['?', 'chicken']);
  // '$#%! chicken? chicken! $#%!';
  Подсказки
  Тернарная операция может сослужить вам хорошую службу в этой практике. 
*/

// const makeCensored = (text, stopWords) => {
//   const words = text.split(' ');
//   const resArr = [];
//   const censored = '$#%!';
//   for (let currentWord of words) {
//     for (const stopWord of stopWords) {
//       if (currentWord === stopWord) {
//         currentWord = censored;
//       }
//     }
//     resArr.push(currentWord);
//   }
//   return resArr.join(' ');
// };

// teacher solution
const makeCensored = (text, stopWords) => {
  const words = text.split(' ');
  const res = [];
  const censored = '$#%!';
  for (const word of words) {
    const newWord = stopWords.includes(word) ? censored : word;
    res.push(newWord);
  }
  return res.join(' ');
};

// testing
const sentence = 'When you play the game of thrones, you win or you die';
const resArr = makeCensored(sentence, ['die', 'play']);
console.log(resArr); // When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']); 
console.log(result2); // '$#%! chicken? chicken! $#%!';