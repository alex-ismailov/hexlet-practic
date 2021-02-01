import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// BEGIN (write your solution here)
export default async () => {
  const state = {
    form: {
      value: 'init_state_value',
    },
    tasks: [],
  };

  const form = document.querySelector('.form-inline');
  const input = document.querySelector('.form-control');
  const renderTasks = () => {
    const { tasks } = state;
    if (tasks.length === 0) {
      return;
    }
    const items = tasks.map((task) => (`<div class="p-2">${task.name}</div>`));
    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.innerHTML = items.join('');
  };

  const initForm = async () => {
    const response = await axios.get(routes.tasksPath());
    state.form.value = '';
    input.value = state.form.value;
    input.focus();
    const { data: { items } } = response;
    state.tasks = [...items];
    renderTasks();
  };

  form.addEventListener('input', (e) => {
    const { target: { value } } = e;
    state.form.value = value;
    input.value = state.form.value;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = { name: state.form.value };
    const response = await axios.post(routes.tasksPath(), data);
    if (response.status !== 201) {
    // Как-то это обрабатываем
      return;
    }
    initForm();
  });

  await initForm(form);
};
// END


// решение учителя
// BEGIN
// const render = (state) => {
//   const container = document.querySelector('.tasks');
//   container.innerHTML = '';
//   state.tasks.forEach((task) => {
//     const el = document.createElement('div');
//     el.classList.add('p-2');
//     el.textContent = task.name;
//     container.appendChild(el);
//   });
// };
 
// export default async () => {
//   const response = await axios.get(routes.tasksPath());
 
//   const state = {
//     tasks: response.data.items,
//   };
 
//   const form = document.querySelector('form');
//   const input = document.querySelector('input');
//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = {
//       name: formData.get('name'),
//     };
//     await axios.post(routes.tasksPath(), data);
//     state.tasks.unshift(data);
//     form.reset();
//     input.focus();
 
//     render(state);
//   });
 
//   render(state);
// };
// END