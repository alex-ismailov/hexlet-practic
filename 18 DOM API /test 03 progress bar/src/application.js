/* src/application.js
Реализуйте и экспортируйте по умолчанию функцию, которая запускает код,
заполняющий элемент <progress> на один процент за 1 секунду. Через 100 секунд процесс должен остановится,
так как достигнет максимума.

Начальное состояние

<progress value="0" max="100"></progress>
Через одну секунду

<progress value="1" max="100"></progress>
Для изменения значения value используйте метод setAttribute()

Подсказки:
Реализуйте задачу используя setTimeout() (с setInterval() может не заработать проверка)
Элемент Progress: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress */

// BEGIN (write your solution here) (write your solution here)
// const run = (v = 0) => {
//   const progressBar = document.querySelector('progress');
//   const currentValue = progressBar.value;
//   const maxValue = progressBar.max;
//   if (currentValue < maxValue) {
//     progressBar.setAttribute('value', currentValue + v);
//     setTimeout(() => run(1), 1000);
//   }
// };

/* teacher solution */
const run = () => {
  const element = document.querySelector('progress');
  const handler = (counter = 0) => {
    if (counter <= 100) {
      element.setAttribute('value', counter);
      setTimeout(() => handler(counter + 1), 1000);
    }
  };

  handler();
};

export default run;
// END
