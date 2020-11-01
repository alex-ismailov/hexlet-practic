import _ from 'lodash';

// BEGIN (write your solution here)
const render = (state) => {
  
};

const handleNewListForm = (state) => (e) => {
  // TODO case для пустого поля
  e.preventDefault();
  const { target, target: elements } = e;
  elements.name.value = '';
  
  const formData = new FormData(target);
  const newList = {
    id: Number(_.uniqueId()),
    name: formData.get('name'),
  };

  state.lists = [...state.lists, newList];
  console.log(state.lists);
  
  render(state);
};

 const handleNewTaskForm = (state) => (e) => {
   e.preventDefault();
   const { target, target: elements } = e;
   elements.name.value = '';
   
   const formData = new FormData(target);
   const newTask = {
     id: _.uniqueId(),
     listId: state.activeList,
     content: formData.get('name'),
   };
   
   state.tasks = [...state.tasks, newTask];
   console.log(state.tasks);
   
   render(state);
 };

const app = () => {
  const state = {
    activeList: 0,
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
