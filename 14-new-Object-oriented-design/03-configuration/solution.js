const hasNumber = (string) => (string.search(/\d/) !== -1);

// BEGIN (write your solution here)
export default class PasswordValidator {
  constructor(config = {}) {
    const { minLength = 8, containNumbers = false } = config;
    this.minLength = minLength;
    this.containNumbers = containNumbers;
  }

  validate(pass) {
    const errors = {};

    if (pass.length < this.minLength) {
      errors.minLength = 'too small';
    }

    if (this.containNumbers) {
      if (!hasNumber(pass)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }

    return errors;
  }
}
// END
