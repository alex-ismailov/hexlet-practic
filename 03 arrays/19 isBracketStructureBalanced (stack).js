/*
  Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку,
  состоящую только из открывающих и закрывающих скобок разных типов,
  и проверяет является ли эта строка сбалансированной.
  Пустая строка (отсутствие скобок) считается сбалансированной.

  import isBracketStructureBalanced from './strings';

  // Пример вложенности
  isBracketStructureBalanced('[()]');  // true
  isBracketStructureBalanced('{<>}}'); // false
  Функция должна поддерживать, минимум, четыре вида скобок:
  круглые — (), квадратные — [], фигурные — {} и угловые — <>.
*/

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)
const isBracketStructureBalanced = (expression) => {
  const stack = []; // складываем сюда открывающие скобки
  const startBrackets = ['(', '[', '{', '<']; // шаблоны откр. скобок
  const pairBrackets = ['()', '[]', '{}', '<>']; // шаблоны сбаланс. скобок
  const bracketColl = expression.split('');
  for (const currentBracket of bracketColl) {
    if (startBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else {
      const prevBracket = stack.pop();
      const currentBracketPair = `${prevBracket}${currentBracket}`;
      console.log(currentBracketPair);
      if (!pairBrackets.includes(currentBracketPair)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// END



// testing
console.log(isBracketStructureBalanced('[()]'));       // true

console.log(isBracketStructureBalanced('{<>}}'));      // false
console.log(isBracketStructureBalanced('['));          // false
console.log(isBracketStructureBalanced('}{'));         // false
console.log(isBracketStructureBalanced('(([<>]){})')); // true
console.log(isBracketStructureBalanced('([{]})'));     // false
