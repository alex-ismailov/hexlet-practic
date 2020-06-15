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

import _ from 'lodash';

// BEGIN (write your solution here)

// END
