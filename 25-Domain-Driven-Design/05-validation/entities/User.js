import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator.js';
import ApplicationEntity from './ApplicationEntity.js';

export default class User extends ApplicationEntity {
  static schema = yup.object({
    email: yup.string().required().email().uniqueness(),
  });

  constructor(email) {
    super();
    this.id = uuid();
    this.email = email;
  }
}
