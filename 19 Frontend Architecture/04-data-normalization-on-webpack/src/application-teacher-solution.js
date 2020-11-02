/* eslint-disable no-param-reassign */

import _ from 'lodash';

// BEGIN
const render = (elements, state) => {
  const { listsContainer, tasksContainer } = elements;

  const ulForLists = document.createElement('ul');
  state.lists.forEach((list) => {
    const li = document.createElement('li');
    let nameContainer;
    if (state.activeListId === list.id) {
      nameContainer = document.createElement('b');
      nameContainer.innerHTML = list.name;
    } else {
      nameContainer = document.createElement('a');
      nameContainer.setAttribute('href', `#${list.name.toLowerCase()}`);
      nameContainer.innerHTML = list.name;
      nameContainer.addEventListener('click', (e) => {
        e.preventDefault();
        state.activeListId = list.id;
        render(elements, state);
      });
    }
    li.appendChild(nameContainer);
    ulForLists.appendChild(li);
  });

  listsContainer.innerHTML = '';
  listsContainer.appendChild(ulForLists);

  const taskForRendering = state.tasks.filter(({ listId }) => listId === state.activeListId);
  tasksContainer.innerHTML = '';
  if (taskForRendering.length > 0) {
    const ulForTasks = document.createElement('ul');
    taskForRendering.forEach((task) => {
      const li = document.createElement('li');
      li.innerHTML = task.name;
      ulForTasks.appendChild(li);
    });
    tasksContainer.appendChild(ulForTasks);
  }

  // NOTE: reseting should be more granular
  elements.newListForm.reset();
  elements.newTaskForm.reset();
};

export default () => {
  const generalList = { id: _.uniqueId(), name: 'General' };
  const state = {
    activeListId: generalList.id,
    lists: [generalList],
    tasks: [],
  };

  const elements = {
    listsContainer: document.querySelector('[data-container="lists"]'),
    tasksContainer: document.querySelector('[data-container="tasks"]'),
    newListForm: document.querySelector('[data-container="new-list-form"]'),
    newTaskForm: document.querySelector('[data-container="new-task-form"]'),
  };

  elements.newListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('name');
    const wasAddedBefore = !!state.lists.find(
      ({ name }) => name.toLowerCase() === value.toLowerCase(),
    );
    if (value !== '' && !wasAddedBefore) {
      const newList = { id: _.uniqueId(), name: value };
      state.lists.push(newList);
      render(elements, state);
    } else {
      // NOTE: render with errors
    }
  });

  elements.newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('name');
    if (value !== '') {
      const newTask = { name: value, listId: state.activeListId };
      state.tasks.push(newTask);
      render(elements, state);
    } else {
      // NOTE: render with errors
    }
  });

  render(elements, state);
};
// END
