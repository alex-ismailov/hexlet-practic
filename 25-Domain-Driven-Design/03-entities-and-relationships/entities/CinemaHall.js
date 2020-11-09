import { v4 as uuid } from 'uuid';

// BEGIN (write your solution here)
export default class CinemaHall {
  constructor(name, rows, cols, filmScreenings = []) {
    this.id = uuid();
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.filmScreenings = filmScreenings; // ???
    this.createdAt = new Date();
  }

  addFilmScreening(filmScreening) {
    this.filmScreenings.push(filmScreening);
  }
}
// END
