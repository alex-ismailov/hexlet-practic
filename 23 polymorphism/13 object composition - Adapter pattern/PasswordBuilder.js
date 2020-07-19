import crypto from 'crypto';

export default class PasswordBuilder {
  constructor(passwordGenerator) {
    this.passwordGenerator = passwordGenerator;
  }

  buildPassword(length = 8, options = ['numbers', 'symbols']) {
    const password = this.passwordGenerator.generatePassword(length, options);
    const digest = crypto.createHash('sha1').update(password).digest('hex');

    return { password, digest };
  }
}
