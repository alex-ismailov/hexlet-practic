import PasswordBuilder from '../PasswordBuilder.js';
import PasswordGeneratorAdapter from '../PasswordGeneratorAdapter.js';

describe('PasswordBuilder', () => {
  it('build use default options', () => {
    const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
    const passwordInfo = builder.buildPassword();

    expect(passwordInfo.password.length).toBe(8);
  });

  it('build use options: lowercase', () => {
    const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
    const passwordInfo = builder.buildPassword(10, []);

    expect(passwordInfo.password.length).toBe(10);
    expect(passwordInfo.password).toMatch(/^[a-z]+$/);
  });

  it('build use options: numbers, uppercase', () => {
    const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
    const passwordInfo = builder.buildPassword(25, ['numbers', 'uppercase']);

    expect(passwordInfo.password.length).toBe(25);
    expect(passwordInfo.password).toMatch(/^[^\W_]+$/);
    expect(passwordInfo.password).toMatch(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*/);
  });
});
