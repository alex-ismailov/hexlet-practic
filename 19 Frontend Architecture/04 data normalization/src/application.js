/* eslint-disable no-param-reassign */

import _ from 'lodash';

// BEGIN (write your solution here)
const handleListClick = (state, id) => () => {
  state.activeListId = id;
  
  renderLists(state);
  renderTasks(state);
};

const renderLists = (state) => {
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
};

const renderTasks = (state) => {
  const { tasks, activeListId } = state;
  // if (tasks.length === 0) {
  //   return;
  // }
  const taskContainer = document.querySelector('div[data-container="tasks"]');
  const tasksFromActiveList = tasks.filter(({ listId }) => listId === activeListId);
  console.log(tasksFromActiveList);
  if (tasksFromActiveList.length === 0) {
    console.log('TADA');
    taskContainer.innerHTML = '';
    return;
  }
  
  const taskItems = tasksFromActiveList.map(({ content }) => `<li>${content}</li>`);

  
  taskContainer.innerHTML = `<ul>${taskItems.join('')}</ul>`;

  const input = document.querySelector('form[data-container="new-task-form"]>input');
  input.value = '';
};

// const render = (state) => {
//   const { activeListId, lists, tasks } = state;
//   // renderLists(lists, activeListId);
//   // renderLists(state);
//   renderTasks(tasks, activeListId);
// };

const handleNewListForm = (state) => (e) => {
  // TODO case для пустого поля
  e.preventDefault();
  const { target } = e;


  const formData = new FormData(target);
  const newList = {
    id: Number(_.uniqueId()),
    name: formData.get('name'),
  };

  state.lists = [...state.lists, newList];
  // console.log(state.lists);
  // elements.name.value = ''; // мне что это должен делать render()

  renderLists(state);
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
  // console.log(state.tasks);
  // elements.name.value = ''; // мне что это должен делать render()

  renderTasks(state);
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

  renderLists(state);
  renderTasks(state);
};

export default app;
// END
