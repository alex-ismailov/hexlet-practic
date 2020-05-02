/* Query String (строка запроса) - часть адреса страницы в интернете содержащая константы и их значения.
Она начинается после вопросительного знака и идет до конца адреса. Пример:

# query string: page=5
https://ru.hexlet.io/blog?page=5
Если параметров несколько, то они отделяются амперсандом &

# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5

buildQueryString.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и
возвращает сформированный query string из этих параметров:

import bqs from '../buildQueryString';

bqs({ per: 10, page: 1 });
// page=1&per=10
Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать) */

const bqs = (data) => {
  const keys = Object.keys(data).sort();
  const strColl = keys.reduce((acc, key) => {
    acc.push(`${key}=${data[key]}`);
    return acc;
  }, []);

  return strColl.join('&');
};

export default bqs;

/* testing */
// console.log(bqs({ per: 10, page: 1 }));
