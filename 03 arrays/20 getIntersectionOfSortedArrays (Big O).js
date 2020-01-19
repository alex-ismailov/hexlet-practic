/* 
  Реализуйте и экспортируйте по умолчанию функцию getIntersectionOfSortedArrays,
  которая принимает на вход два отсортированных массива и находит их пересечение.

  Алгоритм:
  Поиск пересечения двух неотсортированных массивов — операция, в рамках которой
  выполняется вложенный цикл с полной проверкой каждого элемента первого массива
  на вхождение во второй.

  Сложность данного алгоритма O(n * m) (произведение n и m), где n и m — размерности массивов.
  Если массивы отсортированы, то можно реализовать алгоритм, сложность которого уже O(n + m),
  что значительно лучше.

  Суть алгоритма довольно проста. В коде вводятся два указателя (индекса) на каждый из массивов.
  Начальное значение каждого указателя 0. Затем идёт проверка элементов, находящихся
  под этими индексами в обоих массивах. Если они совпадают, то значение заноситсяв результирующий
  массив, а оба индекса инкрементируются. Если значение в первом массиве больше, чем во втором,
  то инкрементируется указатель второго массива, иначе — первого.

  Примеры:
  getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]

  getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []

  getIntersectionOfSortedArrays([], [2]); // []
*/

// O(i * j)
const getIntersectionOfSortedArrays_bad = (arr1, arr2) => {
  const resColl = [];
  let counter = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      counter += 1;
      if (arr1[i] === arr2[j]) {
        resColl.push(arr1[i]);
      }
    }
  }
  console.log(counter);
  return resColl;
};

// O(i * j)
const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const resColl = [];
  let i = 0;
  let j = 0;
  // let counter = 0; // счетчик для оценки сложности алгоритма
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      resColl.push(arr1[i]);
      i += 1;
      j += 1;
    } else if (arr1[i] > arr2[j]) {
      j += 1;
    } else {
      i += 1;
    }
    // counter += 1; // + 1 шаг
  }
  // console.log(`it's took ${counter} steps`); // общее кол-во требуемых шагов для выполнения алгоритма 
  return resColl;
};


// testing
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]
console.log(getIntersectionOfSortedArrays([10, 13, 14, 18, 24, 30], [10, 11, 24])); // [10, 24]
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])); // []

console.log(getIntersectionOfSortedArrays([], [2])); // []