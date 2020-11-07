import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import nock from 'nock';
import run from '../src/application.js';

import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

nock.disableNetConnect();

let elements;

beforeEach(() => {
  const pathToFixture = path.join(path.resolve(), '__tests__/__fixtures__', 'index.html');
  const initHtml = fs.readFileSync(pathToFixture).toString();
  document.body.innerHTML = initHtml;
  run();

  elements = {
    submit: screen.getByText(/Submit/),
    nameInput: screen.getByRole('textbox', { name: /Name/ }),
    emailInput: screen.getByRole('textbox', { name: /Email/ }),
    passwordInput: screen.getByLabelText(/Password/, { selector: '[name="password"]' }),
    passwordConfirmationInput: screen.getByLabelText(/Password Confirmation/),
  };
});

test('submit disabled', async () => {
  await userEvent.type(elements.nameInput, 'Petya');
  await userEvent.type(elements.emailInput, 'wrong-email');
  await userEvent.type(elements.passwordInput, 'long password without confirmation');

  expect(screen.getByRole('button')).toBeDisabled();

  await userEvent.type(elements.passwordInput, 'qwert');

  expect(screen.getByRole('button')).toBeDisabled();

  await userEvent.type(elements.emailInput, 'support@hexlet.io');
  await userEvent.clear(elements.passwordInput);
  await userEvent.type(elements.passwordInput, 'qwerty');
  await userEvent.clear(elements.passwordConfirmationInput);
  await userEvent.type(elements.passwordConfirmationInput, 'qwerty');

  const scope = nock('http://localhost')
    .post('/users')
    .reply(200);

  userEvent.click(elements.submit);
  await waitFor(() => {
    expect(document.body).toHaveTextContent('User Created');
  });

  scope.done();
});

test('fresh application', async () => {
  expect(screen.getByRole('button')).toBeDisabled();
});
