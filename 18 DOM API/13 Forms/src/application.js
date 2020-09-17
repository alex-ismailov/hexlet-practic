/* В задании дана форма обратной связи состоящая из трех полей: email, name и comment.
Реализуйте логику отправки этой формы (без физической отправки куда-либо).
Когда форма заполнена и "отправлена" (нажата кнопка send), то вместо формы появляется такой вывод:

<div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div>

src/application.js
Напишите и экспортируйте функцию по умолчанию, которая реализует необходимую логику. */

// BEGIN (write your solution here)
// export default () => {
//   const fbForm = document.querySelector('form.feedback-form');

//   const handle = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const { email, name, comment } = Object.fromEntries(formData);

//     const div = document.createElement('div');
//     div.innerHTML = `
//       <p>Feedback has been sent</p>
//       <div>Email: ${email}</div>
//       <div>Name: ${name}</div>
//       <div>Comment: ${comment}</div>`;

//     fbForm.replaceWith(div);
//   };

//   fbForm.addEventListener('submit', handle);
// };

/* *** teacher solution *** */
const render = (element, data) => {
  const div = document.createElement('div');
  const { email, name, comment } = data;
  div.innerHTML = `
    <p>Feedback has been sent</p>
    <div>Email: ${email}</div>
    <div>Name: ${name}</div>
    <div>Comment: ${comment}</div>
  `;
  element.replaceWith(div);
};

export default () => {
  const formElement = document.querySelector('.feedback-form');
  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    render(formElement, Object.fromEntries(formData));
  };
  formElement.addEventListener('submit', handle);
};
// END
