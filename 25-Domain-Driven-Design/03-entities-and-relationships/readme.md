# 3. Сущности и связи

## entities/Film.js

Реализуйте и экспортируйте по умолчанию сущность `Film`.

Пример использования:
```
const film = new Film(name, duration);
```
Свойства:

* `id` - идентификатор (автогенерируемое)
* `name` - название фильма
* `duration` - продолжительность
* `createdAt` - дата создания сущности

## entities/CinemaHall.js

Реализуйте и экспортируйте по умолчанию сущность `CinemaHall`.
```
const cinemaHall = new CinemaHall(name, rows, cols);
```
Свойства:

* `id` - идентификатор (автогенерируемое)
* `name` - название зала
* `rows` - количество рядов с сидениями
* `cols` - количество сидений в ряду
* `filmScreenings` - все добавленные сеансы
* `createdAt` - дата создания сущности


## entities/FilmScreening.js

Реализуйте и экспортируйте по умолчанию сущность `FilmScreening`.
```
const filmScreening = new FilmScreening(film, cinemaHall, time);
```
Свойства:

* `id` - идентификатор (автогенерируемое)
* `film` - фильм
* `cinemaHall` - зал
* `time`- время сеанса
* `createdAt` - дата создания сущности

Во время создания сеанса, нужно добавлять сеанс в `cinemaHall`.

## solution.js

Реализуйте и экспортируйте функцию по умолчанию, которая создает просмотр фильма `FilmScreening`
```
const filmScreening = solution('snack', 150, 'smily hall', 30, 50, time);
{
  time: 150,
  film: {
    name: 'snack',
    duration: 150
  },
  cinemaHall: {
    name: 'smily hall',
    rows: 30,
    cols: 50,
    filmScreenings: [[Object]],
  }
}
```
