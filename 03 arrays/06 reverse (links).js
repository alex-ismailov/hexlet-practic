/* Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и
располагает элементы внутри него в обратном порядке.

import { reverse } from './arrays';

const names = ['john', 'smith', 'karl'];

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']

reverse(names);
console.log(names); // => ['john', 'smith', 'karl']
Подсказки
Для решения этой задачи, проще всего брать и менять местами элементы стоящие на зеркальных местах: первый и последний,
второй и предпоследний и так дак далее до середины.
 */
const reverse = (srcArray) => {
  const array = srcArray.slice();
  const pivot = Math.floor(array.length / 2);

  for (let left = 0, right = array.length - 1; left < pivot; left += 1, right -= left) {
    const tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
  }

  return array;
};

const reverse2 = (srcArray) => {
  const array = srcArray.slice();
  const pivot = Math.floor(array.length / 2);
  const iter = (leftIndex, rightIndex) => {
    if (leftIndex >= pivot) {
      return array;
    }
    const tmp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = tmp;

    return iter(leftIndex + 1, rightIndex - 1);
  };

  return iter(0, array.length - 1);
};

/* testing */
const testData = [1, 2, 3, 4];
console.log(testData);
console.log(reverse(testData));
console.log(reverse2(testData));
console.log('****');

const testData2 = [1, 2, 3, 4, 5];
console.log(testData2);
console.log(reverse(testData2));
console.log(reverse2(testData2));
console.log('****');
