/* eslint-disable no-param-reassign */

import _ from 'lodash';

// BEGIN (write your solution here)
const renderLists = (state, handleListClick) => {
  const { activeListId, lists } = state;
  if (lists.length === 0) {
    return;
  }

  const listItems = lists.map(({ id, name }) => {
    const li = document.createElement('li');
    if (id === activeListId) {
      li.innerHTML = `<b>${name}</b>`;
      return li;
    }
    const a = document.createElement('a');
    a.href = '#random';
    a.textContent = name;
    a.addEventListener('click', handleListClick(state, id));
    li.append(a);

    return li;
  });

  const ul = document.createElement('ul');
  listItems.forEach((item) => ul.append(item));

  const listForm = document.querySelector('div[data-container="lists"]');
  listForm.innerHTML = '';
  listForm.append(ul);

  const input = document.querySelector('form[data-container="new-list-form"]>input');
  input.value = '';
}; // end of renderLists

const renderTasks = (state) => {
  const { tasks, activeListId } = state;
  const taskContainer = document.querySelector('div[data-container="tasks"]');
  const tasksFromActiveList = tasks.filter(({ listId }) => listId === activeListId);
  if (tasksFromActiveList.length === 0) {
    taskContainer.innerHTML = '';
    return;
  }

  const taskItems = tasksFromActiveList.map(({ content }) => `<li>${content}</li>`);
  taskContainer.innerHTML = `<ul>${taskItems.join('')}</ul>`;
  const input = document.querySelector('form[data-container="new-task-form"]>input');
  input.value = '';
};

const render = (state) => {
  const handleListClick = (currentState, id) => (e) => {
    e.preventDefault();
    currentState.activeListId = id;
    render(currentState);
  };

  renderLists(state, handleListClick);
  renderTasks(state);
};

const handleNewListForm = (state) => (e) => {
  e.preventDefault();
  const { target } = e;
  const formData = new FormData(target);
  const newList = {
    id: Number(_.uniqueId()),
    name: formData.get('name'),
  };
  state.lists = [...state.lists, newList];

  render(state);
};

const handleNewTaskForm = (state) => (e) => {
  e.preventDefault();
  const { target } = e;
  const formData = new FormData(target);
  const newTask = {
    id: _.uniqueId(),
    listId: state.activeListId,
    content: formData.get('name'),
  };
  state.tasks = [...state.tasks, newTask];

  render(state);
};


const app = () => {
  const state = {
    activeListId: 0,
    lists: [
      {
        id: 0,
        name: 'General',
      },
    ],
    tasks: [
      // {
      //   id: 0,
      //   listId: 0,
      //   content: 'first task in General list'
      // },
    ],
  }; // end of state

  const newListForm = document.querySelector('form[data-container="new-list-form"]');
  newListForm.addEventListener('submit', handleNewListForm(state));

  const newTaskForm = document.querySelector('form[data-container="new-task-form"]');
  newTaskForm.addEventListener('submit', handleNewTaskForm(state));

  render(state);
};

export default app;
// END
