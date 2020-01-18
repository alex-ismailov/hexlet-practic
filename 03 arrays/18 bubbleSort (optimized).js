/* 
  Реализуйте и экспортируйте по умолчанию функцию bubbleSort,
  которая сортирует массив используя пузырьковую сортировку.

  Проходы по массиву повторяются N-1 раз или до тех пор,
  пока на очередном проходе не окажется, что обмены больше не нужны,
  что означает — массив отсортирован.
*/

const bubbleSort = (arr) => {
  let size = arr.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < size; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
    size -= 1;
  } while (swapped);
  
  return arr;
};

// testing
const arr = [9, 1, 8, 7, 3, 5, 4, 2, 6];
console.log(bubbleSort(arr));
