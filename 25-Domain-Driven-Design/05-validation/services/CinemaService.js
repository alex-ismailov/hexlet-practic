import ApplicationService from './ApplicationService.js';
import { Film, FilmScreening, CinemaHall } from '../entities/index.js';

export default class extends ApplicationService {
  createCinemaHall(name, rows, cols) {
    const cinemaHall = new CinemaHall(name, rows, cols);
    const errors = this.validate(cinemaHall);
    if (!errors) {
      this.CinemaHallRepository.save(cinemaHall);
    }
    return [cinemaHall, errors];
  }

  createFilm(name, duration) {
    const film = new Film(name, duration);
    const errors = this.validate(film);
    if (!errors) {
      this.FilmRepository.save(film);
    }
    return [film, errors];
  }

  createFilmScreening(filmId, cinemaHallId, time) {
    const film = this.FilmRepository.find(filmId);
    const hall = this.CinemaHallRepository.find(cinemaHallId);
    const filmScreening = new FilmScreening(film, hall, time);
    const errors = this.validate(filmScreening);
    if (!errors) {
      this.FilmScreeningRepository.save(filmScreening);
    }
    return [filmScreening, errors];
  }
}
