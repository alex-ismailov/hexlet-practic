/* 
  В данном упражнении необходимо реализовать стековую машину, то есть алгоритм,
  проводящий вычисления по обратной польской записи.

  Обратная польская нотация или постфиксная нотация — форма записи математических и
  логических выражений, в которой операнды расположены перед знаками операций.
  Выражение читается слева направо. Когда в выражении встречается знак операции,
  выполняется соответствующая операция над двумя ближайшими операндами, находящимися слева
  от знака операции. Результат операции заменяет в выражении последовательность её операндов
  и знак, после чего выражение вычисляется дальше по тому же правилу. Таким образом,
  результатом вычисления всего выражения становится результат последней вычисленной операции.

  Например:
  выражение (1 + 2) * 4 + 3 в постфиксной нотации будет выглядеть так: 1 2 + 4 * 3 +,
  а результат вычисления: 15.
  Другой пример:
  выражение: 7 - 2 * 3, в постфиксной нотации: 7 2 3 * -, результат: 1.

  solution.js
  Реализуйте функцию calcInPolishNotation, которая принимает массив,
  каждый элемент которого содержит число или знак операции (+, -, *, /).
  Функция должна вернуть результат вычисления по обратной польской записи.
  Экспортируйте функцию по умолачнию.

  calcInPolishNotation([1, 2, '+', 4, '*', 3, '+']); // 15
  calcInPolishNotation([7, 2, 3, '*', '-']); // 1
*/

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const infixCalculator = (fOperand, sOperand, operator) => {
  switch (operator) {
    case '+':
      return Number(fOperand) + Number(sOperand);
    case '-':
      return Number(fOperand) - Number(sOperand);
    case '*':
      return Number(fOperand) * Number(sOperand);
    case '/':
      return Number(fOperand) / Number(sOperand);
    default:
      return null;
  }
};

const calcInPolishNotation = (expression) => {
  const stack = [];
  const operators = ['+', '-', '*', '/'];
  for (const currElem of expression) {
    if (operators.includes(currElem)) {
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();
      // вычисляем результат
      const resOfCurrExpression = infixCalculator(firstOperand, secondOperand, currElem);
      // и кладем полученный результат обратно на вершину стека
      stack.push(resOfCurrExpression);
    } else {
      stack.push(currElem);
    }
  }
  /* После полной обработки входного набора символов результат вычисления выражения
  лежит на вершине стека */
  return stack.pop();
};

// testing
console.log(calcInPolishNotation([1, 2, '+']));
console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])); // 15
console.log(calcInPolishNotation([7, 2, 3, '*', '-'])); // 1