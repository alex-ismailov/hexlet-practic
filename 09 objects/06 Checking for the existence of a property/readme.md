## Checking for the existence of a property

### words.js

Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении и возвращает объект в котором свойства это слова (приведенные к нижнему регистру), а значения — это то сколько раз слово встретилось в предложении. Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.
```
import countWords from './words.js';

// Если предложение пустое, то возвращается пустой объект 
countWords('');
// {}

const text1 = 'one two three two ONE one wow';
countWords(text);
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
countWords(text);
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }
```

##### Подсказки

* Для формирования массива слов поможет функция [_.words](https://lodash.com/docs/4.17.15#words)
* [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) – приведение к нижнему регистру
