## Flash

### flash.js

Реализуйте мидлвару `flash`, которая предоставляет соответствующую функциональность.

Подключение:

`import flash from './flash.js'`;

После подключения сессий:

`app.use(flash())`;

Использование:

`res.flash('info', 'Welcome, ${user.nickname}!');`

Вывод в шаблоне:

```
for message in flash
  .alert(class=`alert-${message.type}`)
```
