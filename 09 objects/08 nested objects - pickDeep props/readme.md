## Nested objects

### objects.js

Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:

* Исходный объект
* Цепочка ключей (массив), по которой ведётся поиск значения

В случае, когда добраться до значения невозможно, возвращается `null`.

```
import get from './objects.js';

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

get(data, ['undefined']); // null
get(data, ['user']); // 'ubuntu'
get(data, ['user', 'ubuntu']); // null
get(data, ['hosts', 1, 'name']); // 'web2'
get(data, ['hosts', 0]); // { name: 'web1' }
get(data, ['hosts', 1, null]); // 3
get(data, ['hosts', 1, 'active']); // false
```

В этой задаче нельзя использовать библиотеку `lodash`. Смысл задачи в том, чтобы реализовать всё самостоятельно.

Для проверки наличия ключа используйте вариант предлагаемый линтером:
```
// Мы еще не проходили прототипы
// но они нам и не нужны, просто скопируйте этот вызов
// и подставьте правильные аргументы

const obj = { key: 'value' };
Object.prototype.hasOwnProperty.call(obj, 'key'); // true
Object.prototype.hasOwnProperty.call(obj, 'another key'); // false
```
