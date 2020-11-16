import ApplicationService from './ApplicationService.js';
import { User } from '../entities/index.js';

export default class extends ApplicationService {
  createUser(email) {
    const user = new User(email);
    const errors = this.validate(user);
    if (!errors) {
      this.UserRepository.save(user);
    }
    return [user, errors];
  }
}
