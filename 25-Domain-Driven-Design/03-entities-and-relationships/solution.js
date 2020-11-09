import { Film, CinemaHall, FilmScreening } from './entities';


const fn = (filmName, duration, cinemaHallName, rows, cols, time) => {
  // BEGIN (write your solution here)
  /* нужно создать просмотр фильма FilmScreening */
  const film = new Film(filmName, duration);
  const cinemaHall = new CinemaHall(cinemaHallName, rows, cols);

  const filmScreening = new FilmScreening(film, cinemaHall, time);
  cinemaHall.addFilmScreening(filmScreening);

  return {
    film,
    cinemaHall,
  };
  // END
};

export default fn;

console.log(fn('the game', 230, 'number 2', 80, 30, 133333 ));

// {
//   time: 150,
//   film: {
//     name: 'snack',
//     duration: 150
//   },
//   cinemaHall: {
//     name: 'smily hall',
//     rows: 30,
//     cols: 50,
//     filmScreenings: [[Object]],
//   }
// }


// returned => 
// {
//   film: Film {
//     id: 'e8e56a0c-f45e-498a-97ff-7f9a12db409b',
//     name: 'the game',
//     duration: 230,
//     createdAt: 2020-11-09T06:20:31.089Z
//   },
//   cinemaHall: CinemaHall {
//     id: '1aa893fa-d0c7-43de-a917-f4be9f7da8c7',
//     name: 'number 2',
//     rows: 80,
//     cols: 30,
//     filmScreenings: [ [FilmScreening] ],
//     createdAt: 2020-11-09T06:20:31.089Z
//   }
// }
