/* prettify
Реализуйте функцию prettify, которая находит текст (дочерние текстовые ноды) внутри элемента div и
оборачивает текст в параграф. Экспортируйте функцию по умолчанию.

// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>

const elements = prettify(document);
console.log(document.body.innerHTML);

// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>

Подсказки
Очистка строки от пробельных символов: trim */

// const prettify = (doc) => {
//   const divs = doc.getElementsByTagName('div');
//   [...divs].forEach((div) => {
//     [...div.childNodes].forEach((child) => {
//       if (child.nodeType === 3) {
//         const pEl = document.createElement('p');
//         const pElText = document.createTextNode(child.textContent);
//         pEl.append(pElText);
//         child.replaceWith(pEl);
//       }
//     });
//   });
// };

const prettify = (doc) => {
  const divs = doc.getElementsByTagName('div');
  [...divs].forEach((div) => {
    [...div.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const pEl = document.createElement('p');
        const pElText = document.createTextNode(child.textContent.trim());
        pEl.append(pElText);
        child.replaceWith(pEl);
      }
    });
  });
};

// Text
// <div>
//   <div>Text</div>
//   <p>Op</p>
// </div>
// <div>My</div>

// 'Text<div><div>Text</div><p>Op</p></div><div>My</div>';
export default prettify;
