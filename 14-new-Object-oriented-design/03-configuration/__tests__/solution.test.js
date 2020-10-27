import PasswordValidator from '../solution.js';

test('testValidateWithDefaultOptions', () => {
  const validator = new PasswordValidator();
  const errors1 = validator.validate('qwertyui');
  expect(errors1).toEqual({});

  const errors2 = validator.validate('qwerty');
  expect(errors2).toEqual({ minLength: 'too small' });

  const errors3 = validator.validate('another-password');
  expect(errors3).toEqual({});
});

test('testValidateWithOptions 1', () => {
  const validator = new PasswordValidator({ containNumbers: true });
  const errors1 = validator.validate('qwertya3sdf');
  expect(errors1).toEqual({});

  const errors2 = validator.validate('qwerty');
  expect(errors2).toEqual({
    minLength: 'too small',
    containNumbers: 'should contain at least one number',
  });

  const errors3 = validator.validate('q23ty');
  expect(errors3).toEqual({ minLength: 'too small' });
});

test('testValidateWithOptions 2', () => {
  const validator = new PasswordValidator({ containNumbers: true, minLength: 10 });
  const errors1 = validator.validate('qwert3yag');
  expect(errors1).toEqual({
    minLength: 'too small',
  });

  const errors2 = validator.validate('qwerty');
  expect(errors2).toEqual({
    minLength: 'too small',
    containNumbers: 'should contain at least one number',
  });

  const errors3 = validator.validate('q2wer3ty4i');
  expect(errors3).toEqual({});
});

test('testValidateWithOptions 2 should`t contain number', () => {
  const validator = new PasswordValidator({ containNumbers: false });
  const errors1 = validator.validate('9qwertyag');
  expect(errors1).toEqual({});
});

test('testValidateWithIncorrectOptions', () => {
  const validator = new PasswordValidator({ containNumberz: null });
  const errors1 = validator.validate('qwertyui');
  expect(errors1).toEqual({});

  const errors2 = validator.validate('qwerty');
  expect(errors2).toEqual({ minLength: 'too small' });
});
