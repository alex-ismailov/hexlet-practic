import i18next from 'i18next';
// Просто пример. Структура может быть любой.
import ru from './locales/ru.js';

i18next.init({
  lng: 'ru',
  debug: true,
  resources: {
    ru,
  },
});


console.log(i18next.t('key'));
console.log(i18next.t('key2'));
console.log(i18next.t('signUpForm.name'));
console.log(i18next.t('signUpForm.email'));
console.log(i18next.t('greeting', { name: 'Alex' }));

console.log('*********');
// console.log('plur.key', { count: 0 });
// console.log('plur.key', { count: 1 });
// console.log('plur.key', { count: 2 });
// console.log('plur.key', { count: 5 });
console.log('key', { count: 0 });
console.log('key', { count: 1 });
console.log('key', { count: 2 });
console.log('key', { count: 5 });
