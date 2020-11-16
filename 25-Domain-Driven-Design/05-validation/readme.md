# 5. Валидация

## entities/CinemaHall.js

Добавьте следующие ограничения:

* `name` не может быть пустым
* `rows` не может быть пустым и должно быть числом
* `cols` не может быть пустым и должно быть числом

## entities/Film.js

Добавьте ограничения:

* `name` не может быть пустым
* `duration` не может быть пустым

## entities/FilmScreening.js

Добавьте ограничения:

* `film` не может быть пустым
* `cinemaHall` не может быть пустым
* `time` не может быть пустым

## entities/FilmScreening/Ticket.js

Добавьте ограничения:

* `filmScreening` не может быть пустым и должен быть уникальным в паре с `place`. Для этого используется такая запись:
```
// Скоуп определяет поле в рамках которого проверяется уникальность.
uniqueness({ scope: ['place'] })
```

* `user` не может быть пустым

place не может быть пустым

## services/MoneyService.js

Реализуйте покупку билета

### Пример:
```
const place = { row: 5, col: 3 };
const [ticket] = moneyService.buyTicket(user.id, filmScreening.id, place);
```

### Подсказки

* Валидатор `uniqueness` реализован в файле `lib/validator.js`.
