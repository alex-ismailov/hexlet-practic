/* eslint no-restricted-syntax: ["off", "ForInStatement"] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable guard-for-in */

import i18next from 'i18next';
import onChange from 'on-change';
import resources from './locales';

// BEGIN (write your solution here)
/* init i18next without Async*/
i18next.init({
  lng: 'en', // Текущий язык
  debug: true,
  resources,
});
/* ************ */

// END

// https://ru.hexlet.io/topics/40698
// https://ru.hexlet.io/topics/39746

