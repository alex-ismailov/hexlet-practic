# Complex state
*Новый курс*

## src/application.js

Реализуйте и экспортируйте функцию по умолчанию, которая создает на странице TODO-приложение. Это приложение состоит из формы добавления (уже есть на странице) и списка задач добавленных через форму. Каждая добавленная задача выводится под списком вместе с добавленными ранее.

Начальный HTML:
```
<div class="container m-3">
  <form class="form-inline">
    <input type="text" required="required" class="form-control mr-3" name="name">
    <input type="submit" class="btn btn-primary mr-3" value="add">
  </form>
  <div class="tasks"></div>
</div>
```
После добавления двух задач:
```
<div class="container m-3">
  <form class="form-inline">
    <input type="text" required="required" class="form-control mr-3" name="name">
    <input type="submit" class="btn btn-primary mr-3" value="add">
  </form>
  <div class="tasks">
    <div class="p-2">Вторая задача</div>
    <div class="p-2">Первая задача</div>
  </div>
</div>
```
У нашего TODO-приложения есть бекенд. Этот бекенд умеет получать новые задачи и возвращать список ранее добавленных задач.

```
import axios from 'axios';
 
// Список добавленных задач GET
axios.get(routes.tasksPath())
// Возвращает объект: { items: [{ name: 'имя задачи' }, { ... }]  }
 
// Добавление новой задачи POST
axios.post(routes.tasksPath(), data) // возвращает 201 в случае успеха
// Где data это { name: 'имя задачи' }
```

Во время инициализации (внутри функции), приложение должно делать запрос на сервер, извлекать оттуда уже добавленные задачи и выводить их на экран. Во время добавления новой задачи, приложение должно выполнять запрос на добавление задачи на сервер.
