/* В Bootstrap есть компонент Carousel.

Этот слайдер устроен также как и все остальное в бутстрапе. В верстке определяются data аттрибуты,
по которым бутстрап понимает что это карусель и оживляет ее.

На слайдере отображаются две стрелки, одна влево другая вправо. Клики по этим стрелкам приводят к
перемотке слайдов по кругу. С точки зрения DOM происходит следующее:

Класс active снимается с текущего элемента .carousel-item
Активный элемент получает класс active
application.js
Реализуйте логику слайдера в функции экспортированной по умолчанию.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов carousel
с любым количеством картинок внутри. */

import $ from 'jquery';

// export default () => {
//   // BEGIN (write your solution here)
//   const changeActivePicture = (carousel, direction) => {
//     const pictures = $(carousel).find('.carousel-inner').children();
//     const [curActivePict] = [...pictures].filter((p) => $(p).attr('class') === 'carousel-item active');

//     let newActivePict = direction === 'next'
//       ? $(curActivePict).next()
//       : $(curActivePict).prev();

//     if ($(pictures).index(newActivePict) === -1 && direction === 'next') {
//       newActivePict = $(pictures).first();
//     } else if ($(pictures).index(newActivePict) === -1 && direction === 'prev') {
//       newActivePict = $(pictures).last();
//     }

//     $(curActivePict).removeClass('active');
//     $(newActivePict).addClass('active');
//   };

//   $('div [data-ride="carousel"]').each((i, carousel) => {
//     const spans = $(carousel).find('span');
//     $(spans).each((ii, span) => {
//       $(span).on('click', (e) => {
//         e.preventDefault();
//         const curParent = $(e.target).parent();
//         const direction = curParent.attr('data-slide');
//         const curCarousel = $(e.target).closest('div .carousel');
//         changeActivePicture(curCarousel, direction);
//       });
//     });
//   });

//   // END
// };

/* it works, but it`s not good enough ! */
// export default () => {
//   // BEGIN (write your solution here)
//   const changeActivePicture = (carousel, direction) => {
//     const pictures = $(carousel).find('.carousel-inner').children();
//     const [curActivePict] = [...pictures].filter((p) => $(p).attr('class') === 'carousel-item active');

//     let newActivePict = direction === 'next'
//       ? $(curActivePict).next()
//       : $(curActivePict).prev();

//     if ($(pictures).index(newActivePict) === -1 && direction === 'next') {
//       newActivePict = $(pictures).first();
//     } else if ($(pictures).index(newActivePict) === -1 && direction === 'prev') {
//       newActivePict = $(pictures).last();
//     }

//     $(newActivePict).addClass('active');
//     $(curActivePict).removeClass('active');
//   };

//   $('div [data-ride="carousel"]').each((i, carousel) => {
//     const aColl = $(carousel).find('a');
//     $(aColl).each((ii, a) => {
//       $(a).on('click', (e) => {
//         e.preventDefault();
//         const directionElement = $(e.target).closest('a[data-slide]');
//         const direction = $(directionElement).attr('data-slide');
//         const curCarousel = $(e.target).closest('div .carousel');
//         changeActivePicture(curCarousel, direction);
//       });
//     });
//   });
//   // END
// };

/* teacher solution */
export default () => {
  // BEGIN
  const carousels = $('[data-ride="carousel"]');
  carousels.each((_index, carousel) => {
    const root = $(carousel);
    const slides = root.find('.carousel-item');
    const maxIndex = slides.length - 1;

    const handlerGenerator = (next) => () => {
      const currentIndex = slides.filter('.active').index();
      const newCurrentIndex = next(currentIndex);
      slides.removeClass('active');
      slides.filter((id) => id === newCurrentIndex).addClass('active');
    };

    const prev = root.find('[data-slide="prev"]');
    prev.click(handlerGenerator((i) => (i === 0 ? maxIndex : i - 1)));
    const next = root.find('[data-slide="next"]');
    next.click(handlerGenerator((i) => (maxIndex === i ? 0 : i + 1)));
  });
  // END
};
