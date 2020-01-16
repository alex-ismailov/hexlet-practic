/* 
  Реализуйте и экспортируйте по умолчанию функцию getTotalAmount.
  Функция принимает на вход в виде массива кошелёк с деньгами и
  название валюты и возвращает сумму денег указанной валюты.

  Реализуйте данную функцию используя управляющие инструкции.

  Параметры функции:

  Массив, содержащий купюры разных валют с различными номиналами
  Наименование валюты
  Примеры
  const money1 = [
    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
  ];
  getTotalAmount(money1, 'usd') // 16

  const money2 = [
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
  ];
  getTotalAmount(money2, 'eur') // 135

  const money3 = [
    'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
  ];
  getTotalAmount(money3, 'rub') // 270
  Подсказки
  Для извлечения подстроки из строки используйте метод slice.

  const str = 'some text';
  str.slice(1, 6); // 'ome t'
  str.slice(7);    // 'xt' 
*/

// const getTotalAmount = (valet, currency) => {
//   let acc = 0;
//   for (const value of valet) {
//     if (value.slice(0, 3) === currency) {
//       acc += Number(value.slice(4));
//     }
//   }
//   return acc;
// };

// const getTotalAmount = (valet, currency) => {
//   let acc = 0;
//   for (const value of valet) {
//     if (value.slice(0, 3) !== currency) {
//       continue;
//     }
//     acc += Number(value.slice(4));
//   }
//   return acc;
// };

// teacher solution
const getTotalAmount = (money, currency) => {
  let sum = 0;
  for (const bill of money) {
    const currentCurrency = bill.slice(0, 3);
    if (currentCurrency !== currency) {
      continue;
    }
    const denomination = Number(bill.slice(4));
    sum += denomination;
  }
  return sum;
};

// testing
const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
console.log(getTotalAmount(money1, 'usd')); // 16
const money2 = [
  'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
console.log(getTotalAmount(money2, 'eur')); // 135
const money3 = [
  'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
console.log(getTotalAmount(money3, 'rub')); // 270
