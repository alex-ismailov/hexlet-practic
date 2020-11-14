import { v4 as uuid } from 'uuid';
import ApplicationEntity from './ApplicationEntity';

export default class FilmScreening extends ApplicationEntity {
  constructor(film, cinemaHall, time) {
    super(film, cinemaHall, time);
    this.id = uuid();
    this.film = film;
    this.cinemaHall = cinemaHall;
    this.time = time;
    this.createdAt = new Date();
  }
}
