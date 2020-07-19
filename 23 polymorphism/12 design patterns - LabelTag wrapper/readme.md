## Design patterns (Patterns)

В этом задании будем работать с классами, которые представляют теги `HTML`. Метод `render()`, позволяет получить текстовое представление тега:

```
import InputTag from '../tags/InputTag.js';

const tag = new InputTag('submit', 'Save');
tag.render(); // <input type="submit" value="Save">
```

Предположим, что эта система нужна для генерации разных кусков верстки, которая может быть очень разнообразной. Попробуйте ответить на вопрос, сколько понадобится классов для представления всех возможных комбинаций тегов?

Если создавать по классу на каждый возможный вариант верстки, то классов будет бесконечно много и смысла в такой реализации очень мало. Но вместо этого лучше использовать композицию. Создать класс для каждого индивидуального тега (в html5 их около 100 штук), а затем путем комбинирования получить все возможные варианты верстки.

### tags/LabelTag.js

Реализуйте класс `LabelTag`, который умеет оборачивать другие теги:

Примеры:

```
import InputTag from '../tags/InputTag.js';
import LabelTag from '../tags/LabelTag.js';

const inputTag = new InputTag('submit', 'Save');
const labelTag = new LabelTag('Press Submit', inputTag);
labelTag.render();
// <label>
//   Press Submit
//   <input type="submit" value="Save">
// </label>
```
##### Подсказки
* Изучите реализацию класса `InputTag`
* [Паттерн Декоратор](https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F))
