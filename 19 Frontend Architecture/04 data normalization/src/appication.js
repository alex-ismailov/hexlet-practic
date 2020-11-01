import _ from 'lodash';

// BEGIN (write your solution here)
const renderLists = (lists, activeListId) => {
  const listItems = lists.map(({ id, name }) => {
    return id === activeListId
      ? `<li><b>${name}</b></li>`
      : `<li><a href="#random">${name}</a></li>`;
  });
  const listForm = document.querySelector('div[data-container="lists"]');
  listForm.innerHTML = `<ul>${listItems.join('')}</ul>`;
};

const renderTasks = () => {};

const render = (state) => {
  const { activeListId, lists, tasks } = state;
  renderLists(lists, activeListId);
  // TODO renderTasks();
};

const handleNewListForm = (state) => (e) => {
  // TODO case для пустого поля
  e.preventDefault();
  const { target, target: elements } = e;
  
  
  const formData = new FormData(target);
  const newList = {
    id: Number(_.uniqueId()),
    name: formData.get('name'),
  };
  
  state.lists = [...state.lists, newList];
  console.log(state.lists);
  elements.name.value = ''; // мне что это должен делать render()
  
  render(state);
};

 const handleNewTaskForm = (state) => (e) => {
   e.preventDefault();
   const { target, target: elements } = e;
   
   
   const formData = new FormData(target);
   const newTask = {
     id: _.uniqueId(),
     listId: state.activeListId,
     content: formData.get('name'),
   };
   
   state.tasks = [...state.tasks, newTask];
   console.log(state.tasks);
   elements.name.value = ''; // мне что это должен делать render()
   
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
