/* wordsCount.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два параметра: список слов и список стоп-слов.
Задача функции вернуть объект типа Map, содержащий в себе частоту переданных слов.
То есть, ключами являются сами слова, а значениями число повторений.

Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра.
Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе.
stopWords – это список стоп-слов, которые не должны попадать в результирующую структуру.
Стоп-слова указываются в нижнем регистре.

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

Подсказки
Воспользуйтесь тройкой map | filter | reduce
Функция has типа Map проверяет, существует ли в мапе элемент с указанным ключом
Проверка должна быть регистронезависимой */

const wordsCount = (words, stopWords) => words
  .map((word) => word.toLowerCase())
  .filter((word) => !stopWords.includes(word))
  .reduce((map, word) => (map.has(word)
    ? map.set(word, map.get(word) + 1)
    : map.set(word, 1)
  ), new Map());

/* testing */
const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
console.log(wordsCount(words, stopWords)); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]
