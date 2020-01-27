/* 
  Реализуйте и экспортируйте по умолчанию функцию sayPrimeOrNot,
  которая проверяет переданное число на простоту и печатает на экран yes или no.

  Примеры использования
  sayPrimeOrNot(5, 2)); // 'yes'
  sayPrimeOrNot(4, 2)); // 'no'
  Подсказки
  Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.
  Для этого выделите процесс определения того, является ли число простым, в отдельную функцию,
  возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода,
  интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).

  Пример такого разделения и хороших абстракций — в решении учителя.
*/

/* solution using for cicle*/
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const size = Math.floor(Math.sqrt(num));
  for (let div = 2; div <= size; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

/* linear recursive solution */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (testDiv) => {
    if (testDiv > Math.floor(Math.sqrt(num))) {
      return num;
    }
    if (num % testDiv === 0) {
      return testDiv;
    }
    return iter(testDiv + 1);
  };
  return num === iter(2);
};

/* Явл-ся ли данная реализация функции isPrime детерминированной? Она всегда возвращает один и тот же ответ
для одних и тех же входных данных, но для этого она вынужденна обращаться к другой вложенной функции findSmallestDiv.
Явл-ся ли findSmallestDiv для isPrime источником внешних данных?*/

const sayPrimeOrNot = (num) => {
  const answer = isPrime(num) ? 'yes' : 'no';
  console.log(answer);
};

/* testing */
sayPrimeOrNot(1); // false
sayPrimeOrNot(2); // true
sayPrimeOrNot(3); // true
sayPrimeOrNot(4); // false
sayPrimeOrNot(29); // true
sayPrimeOrNot(30); // false
