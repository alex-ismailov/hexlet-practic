## Object merge

### objects.js

Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

* Исходный объект
* Список ключей которые нужно оставить
* Данные, которые нужно сливать в исходный объект

В случае, когда список ключей пустой, нужно сливать все данные полностью.

```
import fill from '../objects.js';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }
```
Попробуйте решить эту задачу с помощью слияния.

##### Подсказки

[_.pick()](https://lodash.com/docs/4.17.15#pick)
