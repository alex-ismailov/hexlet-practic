/*
  Реализуйте функцию buildDefinitionList, которая генерирует html список определений
  (теги dl, dt и dd) и возвращает получившуюся строку. При отсутствии элементов в массиве
  функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

  Параметры функции
  Список определений следующего формата:

  definitions = [
    ['definition1', 'description1'],
    ['definition2', 'description2']
  ];
  То есть каждый элемент входного списка сам является массивом, содержащим два элемента:
  термин и его определение.

  Пример использования
  definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
  ];

  buildDefinitionList(definitions);
  // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
 */

/* eslint no-restricted-syntax: 0 */

// const buildDefinitionList = (coll) => {
//   if (coll.length === 0) {
//     return '';
//   }
//   const parts = [];
//   for (const row of coll) {
//     parts.push(`<dt>${row[0]}</dt>`);
//     parts.push(`<dd>${row[1]}</dd>`);
//   }
//   const innerValue = parts.join('');
//   const result = `<dl>${innerValue}</dl>`;
//   return result;
// };

const buildDefinitionList = (coll) => {
  if (coll.length === 0) {
    return '';
  }
  const parts = [];
  for (const row of coll) {
    const name = row[0];
    const description = row[1];
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
  }
  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;
  return result;
};

// teacher solution
// const buildDefinitionList = (definitions) => {
//   if (definitions.length === 0) {
//     return '';
//   }
//   const parts = [];
//   for (let i = 0; i < definitions.length; i += 1) {
//     const name = definitions[i][0];
//     const description = definitions[i][1];
//     parts[i] = `<dt>${name}</dt><dd>${description}</dd>`;
//   }
//   const innerValue = parts.join('');
//   const result = `<dl>${innerValue}</dl>`;
//   return result;
// };

// testing
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

console.log(buildDefinitionList(definitions));
/* eslint no-multiple-empty-lines: 0 */
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

