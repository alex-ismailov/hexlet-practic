/* Эта задача не сложная алгоритмически, но довольно объемная. На решение потребуется время и это хорошая прокачка

В этой задаче вам предстоит сделать список задач похожий на Reminders из MacOS. Reminder позволяет планировать задачи и создавать списки задач. По умолчанию, в нашей реализации сразу должен быть создан канал General. Начальный HTML доступен в public/index.html. После инициализации js он становится таким (туда добавляется General):

<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><b>General</b></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks">
    </div>
  </div>
</div>

После добавления первой задачи в канал General:

<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><b>General</b></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks"><ul><li>My First Task</li></ul></div>
  </div>
</div>

После создания нового канала (но до переключения на него):

<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><b>General</b></li><li><a href="#random">Random</a></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks"><ul><li>My First Task</li></ul></div>
  </div>
</div>

После переключения на канал Random:

<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><a href="#general">General</a></li><li><b>Random</b></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <!-- Форма добавления задачи добавляет задачу в текущий активный канал -->
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks"></div>
  </div>
</div>

src/application.js
Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику. */

// import _ from 'lodash';

// BEGIN (write your solution here)


let channelId = 0;
const makelistId = () => {
  channelId += 1;
  return channelId;
};

let taskId = 0;
const makeTaskId = () => {
  taskId += 1;
  return taskId;
};

const addList = (name) => {

};

const makeNewList = (name) => {
  const newId = makelistId();
  return {
    id: newId,
    name: name,
  }
};
const makeNewTask = (listId, content) => {
  const newId = makeTaskId();
  return {
    id: 0,
    listId: listId,
    content: content,
  };
};

const render = (state, formType, content) => {
  if (formType === 'new-list-form') {
    const container = document.querySelector(`[data-container="lists"]`);
    if (container.children.length === 0) {
      container.innerHTML = '<ul></ul>';
    }
    const ul = container.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = content;
    ul.appendChild(li);
  }
};

const handle = {
  onInput: (state) => (e) => {
    // console.log(e.target.value);
  },
  onSubmit: (state, form) => (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    console.log(name);

    const formType = form.dataset.container;
    console.log(`formType: ${formType}`);

    switch (formType) {
      case 'new-list-form':
        const newList = makeNewList(content);
        state.lists.push(newList);
        break;
    
      default:
        break;
    }

    const newList = makeNewList(name);
    state.lists.push(newList);
    // const formType = form.dataset.container;
    render(state, formType, name);
  },
};

const app = () => {
  const state = {
    lists: [],
    activeList: null,
    tasks: [],
  };

  const listForm = document.querySelector('[data-container="new-list-form"]');
  // listForm.addEventListener('input', handle.onInput(state));
  listForm.addEventListener('submit', handle.onSubmit(state, listForm));

  const taskForm = document.querySelector('[data-container="new-task-form"]');
  taskForm.addEventListener('submit', handle.onSubmit(state, taskForm));

};

// export default app;

app();
// END

/* Примерный state для текущей задачи */
// const state = {
//   channels: [
//     {
//       id: 0,
//       name: 'General'
//     },
//   ],
//   tasks: [
//     {
//       id: 0,
//       channelId: 0,
//       content: 'My First Task',
//     }
//   ],
// };

/* Полезные топики */
// flatMap: https://ru.hexlet.io/topics/41550
// state: https://ru.hexlet.io/topics/40369
// проверки: https://ru.hexlet.io/topics/36407
// проверки: https://ru.hexlet.io/topics/36141
// Плюс то что пришло, но не должно было. Минус то чего не было.
