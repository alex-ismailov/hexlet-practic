# 3. Позднее связывание

## Base.js

Реализуйте метод `isInstanceOf(className)`, который проверяет, что объект принадлежит одному из классов в цепочке наследования.
```
// class ChildOfChild extends FirstChild extends Base

const obj = new ChildOfChild();
obj.isInstanceOf('FirstChild'); // true
obj.isInstanceOf('SomeClass'); // false
```

### Подсказки

* Имя текущего объекта можно получить из свойства `constructor`
* Погрузиться на уровень ниже можно через получение прототипа
