import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator.js';
import ApplicationEntity from './ApplicationEntity.js';

export default class FilmScreening extends ApplicationEntity {
  // BEGIN (write your solution here)
  
  // END

  constructor(film, cinemaHall, time) {
    super();
    this.id = uuid();
    this.film = film;
    this.cinemaHall = cinemaHall;
    this.time = time;
    this.createdAt = new Date();
  }
}
