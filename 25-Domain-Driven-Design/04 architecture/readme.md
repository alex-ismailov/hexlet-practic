# 4. Архитектура

## lib/BaseRepository.js

Реализуйте базовый класс репозиторий со следующими методами:

* save(entity)
* find(id)

Принцип работы:
```
const repository = new CinemaHallRepository();
const hall = repository.save(cinemaHall);
repository.find(cinemaHall.id);
```
## services/CinemaService.js

Каждая реализация бизнес-сценария в сервисе самостоятельно отвечает за сохранение созданных сущностей в соответствующих репозиториях. Как пример, можно посмотреть реализацию `createFilm`. Доступ к репозиториям осуществляется через `this`.

Реализуйте следующие методы (бизнес-сценарии):

### Добавление кинозала
```
const cinemaHall = service.createCinemaHall(name, rows, cols);
```

### Добавление сеанса
```
const filmScreening = service.createFilmScreening(filmId, cinemaHallId, time);
```
