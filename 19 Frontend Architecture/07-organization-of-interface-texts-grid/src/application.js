/* eslint no-restricted-syntax: ["off", "ForInStatement"] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable guard-for-in */

import i18next from 'i18next';
import onChange from 'on-change';
import resources from './locales';

// BEGIN (write your solution here)
/* init i18next without Async */
i18next.init({
  lng: 'en', // Текущий язык
  debug: true,
  resources,
});
/* ************ */


const render = (watchedState) => {
  const container = document.querySelector('.container');
  const table = document.createElement('table');
  table.classList.add('table');
  const tbody = document.createElement('tbody');

  const trFirst = `<th><a href="">${i18next.t('name')} (${i18next.t(watchedState.grid.nameOrder)})</a></th>
                   <th><a href="">${i18next.t('value')} (${i18next.t(watchedState.grid.valueOrder)})</a></th>`;
  tbody.innerHTML = trFirst;

  const locationProps = getLocationProps();
  console.log(locationProps);

  const trRows = Object.entries(locationProps)
    .map(([key, value]) => {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdValue = document.createElement('td');

      tdName.textContent = i18next.t(key);
      tdValue.textContent = value;
      tr.append(tdName);
      tr.append(tdValue);

      return tr;
    });

  trRows.forEach((tr) => tbody.append(tr));
  table.append(tbody);
  container.append(table);
};


// END

// https://ru.hexlet.io/topics/40698
// https://ru.hexlet.io/topics/39746
