/* ls.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход путь
(абсолютный или относительный) и возвращает информацию о файлах и директориях,
расположенных по этому пути. Данные возвращаются в виде массива объектов,
где каждый элемент — это информация о конкретном файле: его путь и описание доступов (stat.mode).
Объекты в массиве должны быть отсортированы по имени файла.

Примеры
import ls from '../ls.js';

await ls('/var');
// [
//   { filepath: '/var/local', mode: 17917 },
//   { filepath: '/var/lock', mode: 17407 },
//   { filepath: '/var/log', mode: 16877 },
// ];

await ls('/etc/passwd');
// [{ filepath: '/etc/passwd', mode: 33188 }];

await ls('../../../../etc/passwd');
// [{ filepath: '/etc/passwd', mode: 33188 }];
Эта функция должна уметь обрабатывать не только директории, но и файлы.
В таком случае отдается массив с одним объектом — информацией по текущему файлу.

Подсказки
readdir() — чтение директории
stat() — информация о файле. isFile() — является ли файлом, mode - описание доступа. */

import _ from 'lodash';
import path from 'path';
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export default async (filepath) => {
  const filepathStat = await fs.stat(filepath);
  if (filepathStat.isFile()) {
    return [{ filepath: path.resolve(filepath), mode: filepathStat.mode }];
  }

  const elements = await fs.readdir(filepath);
  const paths = elements.map((e) => path.join(filepath, e));
  const statPromises = paths.map(fs.stat);
  const stats = await Promise.all(statPromises);

  const fileInfos = stats.map((stat, index) => (
    { filepath: path.resolve(paths[index]), mode: stat.mode }
  ));

  return _.sortBy(fileInfos, 'path');
};
// END
