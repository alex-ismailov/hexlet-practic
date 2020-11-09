import { Film, CinemaHall, FilmScreening } from './entities';


export default (filmName, duration, cinemaHallName, rows, cols, time) => {
  // BEGIN (write your solution here)
  const film = new Film(filmName, duration);
  const cinemaHall = new CinemaHall(cinemaHallName, rows, cols);
  const filmScreening = new FilmScreening(film, cinemaHall, time);

  return filmScreening;
  // END
};
