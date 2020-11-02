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

  const listContainer = document.querySelector('div[data-container="lists"]');
  listContainer.innerHTML = '';
  listContainer.append(ul);
};

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

const handleNewList = (state, formData) => {
  const newList = {
    id: Number(_.uniqueId()),
    name: formData.get('name'),
  };
  state.lists = [...state.lists, newList];

  render(state);
};

const handleNewTask = (state, formData) => {
  const newTask = {
    id: _.uniqueId(),
    listId: state.activeListId,
    content: formData.get('name'),
  };
  state.tasks = [...state.tasks, newTask];

  render(state);
};

const mapping = {
  list: handleNewList,
  task: handleNewTask,
};

const handleForm = (state, formType) => (e) => {
  e.preventDefault();
  const { target } = e;
  const formData = new FormData(target);

  mapping[formType](state, formData);

  const currentInput = document.querySelector(`form[data-container="new-${formType}-form"]>input`);
  currentInput.value = '';
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

  const forms = document.querySelectorAll('form[data-container]');
  forms.forEach((form) => {
    const rawFormType = form.dataset.container;
    const [, formType] = rawFormType.split('-');
    form.addEventListener('submit', handleForm(state, formType));
  });

  render(state);
};

export default app;
// END
