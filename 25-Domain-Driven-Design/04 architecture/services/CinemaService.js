import ApplicationService from './ApplicationService';
import { Film, CinemaHall, FilmScreening } from '../entities';

export default class extends ApplicationService {
  // BEGIN (write your solution here)
  
  // END

  createFilm(name, duration) {
    const film = new Film(name, duration);
    this.FilmRepository.save(film);
    return film;
  }
}
