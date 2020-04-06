/* Реализуйте функцию, которая принимает на вход директорию (объект-дерево),
приводит имена всех файлов в этой и во всех вложенных директориях к нижнему регистру.
Результат в виде обработанной директории возвращается наружу.
Экспортируйте по умолчанию функцию. */
/* Подсказки
Для проверки, является ли узел файлом, используйте функцию isFile.
Эта функция принимает узел и возвращает результат проверки (true или false): */
/* isFile(file); // true
isFile(directory); // false */

import {
  //mkdir, mkfile,
  isFile,
} from '@hexlet/immutable-fs-trees';

// const downcaseFileNames = (tree) => {
//   const {name, children} = tree;

//   if (isFile(tree)) {
//     return mkfile(name.toLowerCase());
//   }

//   return mkdir(name, children.map(downcaseFileNames));
// };

const downcaseFileNames = (tree) => {
  const { name, children } = tree;

  if (isFile(tree)) {
    return { ...tree, name: name.toLowerCase() };
  }

  return { ...tree, children: children.map(downcaseFileNames) };
};

export default downcaseFileNames;
