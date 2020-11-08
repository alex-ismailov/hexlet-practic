import _ from 'lodash';
import solution from '../solution';

test('solution1', () => {
  const time = new Date();
  const filmScreening = solution('snack', 150, 'smily hall', 30, 50, time);
  const expected = {
    time,
    film: {
      name: 'snack',
      duration: 150,
    },
  };
  expect(filmScreening).toMatchObject(expected);
  expect(filmScreening.cinemaHall).toMatchObject({
    name: 'smily hall',
    rows: 30,
    cols: 50,
    filmScreenings: [{ time }],
  });
});

test('solution2', () => {
  const time = new Date();
  const filmScreening = solution('the game', 230, 'number 2', 80, 30, time);
  const expected = {
    time,
    film: {
      name: 'the game',
      duration: 230,
    },
  };
  expect(filmScreening).toMatchObject(expected);
  expect(filmScreening.cinemaHall).toMatchObject({
    name: 'number 2',
    rows: 80,
    cols: 30,
  });
  const lastFilmScreening = _.last(filmScreening.cinemaHall.filmScreenings);
  expect(lastFilmScreening).toEqual(filmScreening);
});
