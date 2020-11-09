import { fi } from 'date-fns/locale';
import { v4 as uuid } from 'uuid';

// BEGIN (write your solution here)
export default class FilmScreening {
  constructor(film, cinemaHall, time) {
    this.id = uuid();
    this.film = film;
    this.cinemaHall = cinemaHall;
    this.time = time;
    this.createdAt = new Date();
  }
}
// END
