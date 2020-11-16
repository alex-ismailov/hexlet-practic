import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator.js';
import ApplicationEntity from './ApplicationEntity.js';

export default class Film extends ApplicationEntity {
  // BEGIN (write your solution here)
  
  // END

  constructor(name, duration) {
    super();
    this.id = uuid();
    this.name = name;
    this.duration = duration;
    this.createdAt = new Date();
  }
}
