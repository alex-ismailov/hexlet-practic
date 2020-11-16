import CinemaService from '../services/CinemaService.js';
import MoneyService from '../services/MoneyService.js';
import UserService from '../services/UserService.js';
import * as repositories from '../repositories/index.js';
import generateValidator from '../lib/validator.js';

describe('MoneyService', () => {
  let moneyService;
  let cinemaService;
  let userService;
  let film;
  let cinemaHall;
  let filmScreening;
  let user;

  beforeEach(() => {
    const repositoryInstances = Object.keys(repositories)
      .reduce(
        (acc, name) => ({ [name]: new repositories[name](), ...acc }),
        {},
      );
    const validate = generateValidator(repositoryInstances);

    cinemaService = new CinemaService(repositoryInstances, validate);
    moneyService = new MoneyService(repositoryInstances, validate);
    userService = new UserService(repositoryInstances, validate);

    const email = 'etst@email.com';
    [user] = userService.createUser(email);
    [film] = cinemaService.createFilm('first glance', 100);
    [cinemaHall] = cinemaService.createCinemaHall('first', 5, 5);
    [filmScreening] = cinemaService
      .createFilmScreening(film.id, cinemaHall.id, new Date());
  });

  it('create user with duplicate email', () => {
    const email = 'etst@email.com';
    const [, errors] = userService.createUser(email);
    const expected = {
      email: [
        'email already exists',
      ],
    };

    expect(errors).toMatchObject(expected);
  });

  it('buyTicket', () => {
    const place = { row: 5, col: 3 };
    const [ticket] = moneyService.buyTicket(user.id, filmScreening.id, place);
    const ticketExpected = {
      place,
    };

    expect(ticket).toMatchObject(ticketExpected);
  });

  it('buyTicket (Entity not found error)', () => {
    const f = () => moneyService.buyTicket();

    expect(f).toThrow();
  });

  it('buyTicket with double reservation', () => {
    const place = { row: 5, col: 3 };
    moneyService.buyTicket(user.id, filmScreening.id, place);
    const [, errors] = moneyService.buyTicket(user.id, filmScreening.id, place);
    const expected = {
      filmScreening: [
        'filmScreening already exists',
      ],
    };

    expect(errors).toMatchObject(expected);
  });

  it('buyTicket for the same filmscreening', () => {
    const place = { row: 5, col: 3 };
    moneyService.buyTicket(user.id, filmScreening.id, place);
    const nextPlace = { row: 5, col: 4 };
    const [, errors] = moneyService.buyTicket(user.id, filmScreening.id, nextPlace);
    expect(errors).toBeUndefined();
  });
});
