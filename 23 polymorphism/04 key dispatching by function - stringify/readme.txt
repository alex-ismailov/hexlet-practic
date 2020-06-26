html.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход тег и возвращает его текстовое представление.

Примеры
import stringify from './html.js';

const hrTag = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
const html = stringify(hrTag); // <hr class="px-3" id="myid">

const divTag = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
const html = stringify(divTag); // <div id="wow">text2</div>

const emptyDivTag = {
  name: 'div',
  tagType: 'pair',
  body: '',
  id: 'empty',
};
const html = stringify(emptyDivTag); // <div id="empty"></div>
Примечания
В структуре тега есть три специальных ключа:

name — имя тега.
tagType — тип тега, определяет его парность (pair) или одиночность (single).
body — тело тега, используется для парных тегов. Если у парного тега нет содержимого, то body равно пустой строке ''.
Всё остальное становится атрибутами тега и не зависит от того, парный он или нет.