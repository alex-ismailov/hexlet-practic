/*
  Обратите внимание на сходство json и объекта. Оно не случайно.
  Json является представлением ассоциативного массива в текстовом виде.
  Реализуйте и экспортируйте по умолчанию функцию getJsonFileData,
  которая возвращает ассоциативный массив, соответствующий json из файла example.json
  в этом упражнении. Всё, что вам нужно сделать — посмотреть на содержимое example.json
  и руками сформировать объект аналогичной структуры.
*/

// const getJsonFileData = () => {
//   const obj = {
//     common: {
//       files: [
//         'src/objects.js',
//       ],
//     },
//     config: {
//       outdir: '/dist',
//     },
//   };
//   return obj;
// };

/* teacher solution */
const getJsonFileData = () => ({
  common: {
    files: [
      'src/objects.js',
    ],
  },
  config: {
    outdir: '/dist',
  },
});

/* testing */
console.log(getJsonFileData());
