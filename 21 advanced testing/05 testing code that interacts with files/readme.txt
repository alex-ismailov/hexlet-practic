tests/prettifyHTMLFile.test.js

Протестируйте функцию, которая форматирует указанный HTML-файл.

// содержимое до форматирования
// <div><p>hello <b>world</b></p></div>

await prettifyHTMLFile('/path/to/file');

// содержимое после форматирования:
// <div>
//     <p>hello <b>world</b></p>
// </div>

Подсказки
В директории __fixtures__ лежат готовые фикстуры для тестов.
