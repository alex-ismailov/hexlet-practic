/* В HTML некоторые элементы хранят ссылку в атрибуте href, а некоторые — в src. Например:

<img src="/logo.jpg">
<link href="/style.css">
<a href="/">

Абстракция Tags содержит интерфейс для представления тега HTML:

const hr = make('hr');
const a = make('a', { href: '/' });

getName(a); // a
getAttribute('href', a); // /
getAttribute('notexist', a); // undefined
make — принимает на вход два параметра: название тега и объект, в котором содержатся атрибуты и их значения.
getName — принимает на вход тег, полученный вызовом make, и возвращает его имя.
getAttribute — принимает на вход имя атрибута и тег, полученный вызовом make. Возвращает значение атрибута.
extract.js
Реализуйте и экспортируйте по умолчанию функцию extract, которая принимает на вход список тегов
(только <a>, <link> и <img>) и возвращает список ссылок, извлеченных из этих тегов.

const tags = l(
  make('a', { href: '/about' }),
  make('img', { src: '/avatar.jpeg' }),
  make('link', { href: '/favicon.ico' }),
);

extract(tags); // ('/about', '/avatar.jpeg', '/favicon.ico')
Подсказки
Воспользуйтесь функцией map для обхода коллекции.
В коде не должно быть условных конструкций и, в целом, любых логических выражений.
Используйте полиморфизм на основе ключей в объекте.
Проанализируйте код файла tags.js, чтобы окончательно разобраться с устройством абстракции для тегов.
При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки @hexlet/pairs-data и
использовать её для отладки решений.
 */

import { map } from '@hexlet/pairs-data';
import { getAttribute, getName } from './tags';

// BEGIN (write your solution here)
export default (tags) => map((tag) => {
  const attributeName = getName(tag) === 'img' ? 'src' : 'href';
  return getAttribute(attributeName, tag);
}, tags);
// END
