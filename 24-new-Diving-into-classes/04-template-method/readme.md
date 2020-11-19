# 4. Шаблонный метод

## HTMLPairElement.js

Реализуйте класс *HTMLPairElement* (наследуется от *HTMLElement*), который отвечает за генерацию представления парных элементов и работу с телом. Класс должен содержать следующие методы:
```
toString();
getTextContent();
setTextContent(body); // принимает строку
```

## HTMLDivElement.js

Реализуйте класс *HTMLDivElement*, который описывает собой парный тег `<div>`.
```
const div = new HTMLDivElement({ name: 'div', 'data-toggle': true });
div.setTextContent('Body');
console.log(div); // '<div name="div" data-toggle="true">Body</div>'
```
