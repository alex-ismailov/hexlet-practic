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


const getLocationProps = () => {
  const { location } = document;
  let locationProps = {};
  for (const key in location) {
    if (location.hasOwnProperty(key)) {
      const element = location[key];
      // рассмотреть instanceof Object Function ....
      if ((typeof element !== 'function') && (typeof element !== 'object') && (element !== '')) {
        locationProps = { ...locationProps, [key]: location[key] };
      }
    }
  }

  return locationProps;

  /* *** alternative ways *** */
  // const locationProps2 = Object.keys(location)
  //   .filter((key) => (typeof location[key] !== 'function') && (typeof location[key] !== 'object') && (location[key] !== '') )
  //   .reduce((acc, key) => ({ ...acc, [key]: location[key] }), {});
  // return locationProps2;

  // const locationProps3 = Object.keys(location)
  //   .filter((key) => (typeof location[key] === 'string') && (location[key] !== ''))
  //   .reduce((acc, key) => ({ ...acc, [key]: location[key] }), {});

  // console.log(locationProps);
  // console.log(locationProps2);
  // console.log(locationProps3);
  // console.log(typeof (() => {}));
  // console.log(typeof {});
  // console.log(typeof 'str');
  /* ******************** */
};

const handleTabHeadClick = (watchedState) => (e) => {
  e.preventDefault();
  const { target } = e;
  const { activeColumnName, order } = watchedState.grid;

  const targetColumnName = target.textContent.toLowerCase().includes('name')
    ? 'name'
    : 'value';

  watchedState.grid.activeColumnName = targetColumnName;

  const oppositeOrder = order === 'asc' ? 'desc' : 'asc';
  watchedState.grid.order = activeColumnName !== targetColumnName ? 'asc' : oppositeOrder;
};

const sortLocationPropsEntries = (locationPropsEntries, byColumn, direction) => {
  const orderMapping = {
    asc: (a, b) => a.localeCompare(b, 'en', { numeric: true }),
    desc: (a, b) => b.localeCompare(a, 'en', { numeric: true }),
  };

  const compareEntries = (sortingBy, order) => (aEntry, bEntry) => {
    const [aKey, aValue] = aEntry;
    const [bKey, bValue] = bEntry;

    switch (sortingBy) {
      case 'name':
        return orderMapping[order](aKey, bKey) === 0
          ? orderMapping[order](aValue, bValue)
          : orderMapping[order](aKey, bKey);
      case 'value':
        return orderMapping[order](aValue, bValue) === 0
          ? orderMapping[order](aKey, bKey)
          : orderMapping[order](aValue, bValue);

      default:
        return 'Exception';
    }
  };

  const sortMapping = {
    name: {
      asc: (array) => array.sort(compareEntries('name', 'asc')),
      desc: (array) => array.sort(compareEntries('name', 'desc')),
    },
    value: {
      asc: (array) => array.sort(compareEntries('value', 'asc')),
      desc: (array) => array.sort(compareEntries('value', 'desc')),
    },
  };

  /* start sorting */
  sortMapping[byColumn][direction](locationPropsEntries);
};

const render = (watchedState) => {
  const { activeColumnName, order } = watchedState.grid;

  const container = document.querySelector('.container');
  container.innerHTML = '';

  const table = document.createElement('table');
  table.classList.add('table');
  const tbody = document.createElement('tbody');

  const nameOrderKey = activeColumnName === 'name' ? order : 'unsorted';
  const valueOrderKey = nameOrderKey === 'unsorted' ? order : 'unsorted';

  const trFirst = `<th><a href="">${i18next.t('name')} (${i18next.t(nameOrderKey)})</a></th>
                   <th><a href="">${i18next.t('value')} (${i18next.t(valueOrderKey)})</a></th>`;
  tbody.innerHTML = trFirst;

  const aLinks = tbody.querySelectorAll('a');
  aLinks.forEach((thLink) => thLink.addEventListener('click', handleTabHeadClick(watchedState)));

  const locationProps = getLocationProps();
  const locationPropsEntries = Object.entries(locationProps);

  sortLocationPropsEntries(locationPropsEntries, activeColumnName, order);

  const trRows = locationPropsEntries
    .map(([key, value]) => {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdValue = document.createElement('td');

      tdName.textContent = i18next.t(key);
      tdValue.textContent = value;
      tr.append(tdName, tdValue);

      return tr;
    });

  tbody.append(...trRows);
  table.append(tbody);
  container.append(table);
};


export default () => {
  const state = {
    grid: {
      activeColumnName: 'name', // || 'value'
      order: 'asc', // by default || desc
    },
  };

  const watchedState = onChange(state, () => {
    // ...
    render(watchedState);
  });

  render(watchedState);
};
// END

// https://ru.hexlet.io/topics/40698
// https://ru.hexlet.io/topics/39746
