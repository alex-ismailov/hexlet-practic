import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator.js';
import ApplicationEntity from './ApplicationEntity.js';

export default class CinemaHall extends ApplicationEntity {
  // BEGIN (write your solution here)
  // schema = yup.object().shape({
  //   username: yup.string().required().uniques(),
  // });

  // try {
  //   yup.object().uni
  // } catch (error) {
    
  // }
  // END

  constructor(name, rows, cols) {
    super();
    this.id = uuid();
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.createdAt = new Date();
  }
}
