/* eslint no-param-reassign: 0 */

import onChange from 'on-change';

// BEGIN (write your solution here)
// => controller
const handleListGroup = (watchedState) => (e) => {
  e.preventDefault();
  const { target: listGroupItem } = e;
  const listGroupId = listGroupItem.parentNode.id;
  watchedState[listGroupId].activeItemId = listGroupItem.id;
};

// => view
const render = (newActiveListGroupItemId, prevActiveListGroupItemId) => {
  const newActiveListGroupItem = document.querySelector(`#${newActiveListGroupItemId}`);
  newActiveListGroupItem.classList.add('active');

  const prevActiveListGroupItem = document.querySelector(`#${prevActiveListGroupItemId}`);
  prevActiveListGroupItem.classList.remove('active');

  const newActiveTabPane = document.querySelector(`[aria-labelledby="${newActiveListGroupItemId}"]`);
  newActiveTabPane.classList.add('active', 'show');

  const prevActiveTabPane = document.querySelector(`[aria-labelledby="${prevActiveListGroupItemId}"]`);
  prevActiveTabPane.classList.remove('active', 'show');
};

// => model
const initState = (state, listGroup) => {
  const listGroupId = listGroup.id;
  const firstListGroupItemId = listGroup.firstElementChild.id;

  state[listGroupId] = {
    activeItemId: firstListGroupItemId,
  };
};

export default () => {
  const state = {
    // 'list-tab': {
    //   activeItemId: 'list-home-list',
    // }
  };

  const listGroups = document.querySelectorAll('.list-group');
  listGroups.forEach((listGroup) => initState(state, listGroup));

  const watchedState = onChange(state, (path, newActiveListGroupItemId, prevActiveListGroupItemId) => {
    render(newActiveListGroupItemId, prevActiveListGroupItemId);
  });

  listGroups.forEach((listGroup) => {
    listGroup.addEventListener('click', handleListGroup(watchedState));
  });
};
// END
