## server.js

Реализуйте обработчик адреса ` /users.json `. Он должен отдавать данные в следующем формате:

```
{
  "meta": { "page": 5, "perPage": 2, "totalPages": 500  },
  "data": [
    { "name": "Mrs. Marlee Lesch", "phone": "(412) 979-7311" },
    { "name": "Mrs. Mabelle Cormier", "phone": "307.095.4754" }
  ]
}
```

Этот вызов должен поддерживать пагинацию (pagination, постраничный вывод) результата. За это отвечают два параметра запроса:

` page ` - текущая запрошенная страница. По умолчанию 1.

` perPage ` - количество возвращенных данных на страницу. По умолчанию 10.

Пример:

` $ curl "localhost:8080/users.json?page=2&perPage=3" `
```
{
  meta: { page: 2, perPage: 3, totalPages: 334 },
  data: [
    { name: "Liam Wiegand", phone: "1-327-988-3382" },
    { name: "Lonny McGlynn", phone: "(935) 384-0149" },
    { name: "Dr. Faustino Bailey", phone: "746-901-8330" }
  ]
};
```
