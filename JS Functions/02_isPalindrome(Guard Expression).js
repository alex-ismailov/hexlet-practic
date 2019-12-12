/*
* JS: Функции → Guard Expression
* Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. 
* Например: радар, топот.
* Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.
*/

const isPalindrome = (str) => {
  if (str.length < 2) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.substring(1, str.length - 1));
};

// testing isPalindrome
const args = ['radar', 'a', 'abs', '', 'aa', 'ab', 'tanat', 'taat'];
args.forEach((string) => {
  console.log(`isPalindrome(${string}) = ${isPalindrome(string)}`);
});
