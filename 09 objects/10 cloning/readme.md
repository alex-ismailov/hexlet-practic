## Cloning

## objects.js

Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов. Для реализации этой задачи нельзя использовать функцию `cloneDeep()` библиотеки `lodash`.
```
import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true
```

Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект. Если значением какого-то свойства является объект, то нужно рекурсивно запустить функцию `cloneDeep(value)`.

##### Подсказки

* Для рекурсивного запуска понадобится имя для функции
* [_.isObject()](https://lodash.com/docs/4.17.15#isObject)
* [Рекурсия](https://ru.hexlet.io/courses/introduction_to_programming/lessons/recursion/theory_unit)
