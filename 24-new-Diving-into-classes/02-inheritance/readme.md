# 2. Наследование

## HTMLHrElement.js

Реализуйте класс *HTMLHrElement* (наследуется от HTMLElement), который отвечает за представление тега `<hr>`. Внутри класса определите функцию `toString()`, которая возвращает текстовое представление тега.
```
import HTMLHrElement from './HTMLHrElement.js'
const hr = new HTMLHrElement();
console.log(hr); // => <hr>

const hr = new HTMLHrElement({ class: 'w-75', id: 'wop' });
console.log(hr); // => '<hr class="w-75" id="wop">';
```

## src/HTMLElement.js

Реализуйте метод `stringifyAttributes()`, который формирует строчку для аттрибутов. Используйте этот метод в наследнике для формирования тега.
