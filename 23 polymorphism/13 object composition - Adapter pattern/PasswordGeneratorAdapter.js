import generator from 'generate-password';

export default class PasswordGeneratorAdapter {
  // BEGIN (write your solution here)
  options = {
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  generatePassword(length, options) {
    // const normalizedOptions = options
    //   .reduce((acc, option) => ({ ...acc, [option]: true }), { length, ...this.options });
    // return generator.generate(normalizedOptions);

    /* teacher solution */
    const preparedOptions = Object.fromEntries(options.map((o) => [o, true]));
    const finalOptions = { length, ...this.options, ...preparedOptions };

    return generator.generate(finalOptions);
  }
  // END
}
