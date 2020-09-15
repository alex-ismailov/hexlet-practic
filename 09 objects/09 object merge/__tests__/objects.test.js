import fill from '../objects.js';

let object;

const data = {
  key2: 'value3',
  key3: 'val',
  key4: 'boom!',
  key: 'another value',
};

beforeEach(() => {
  object = {
    key: 'value',
    key2: 'value2',
  };
});

it('fill 1', () => {
  fill(object, ['key2'], data);
  const result = {
    key: 'value',
    key2: 'value3',
  };
  expect(object).toEqual(result);
});

it('fill 2', () => {
  fill(object, ['key', 'key2', 'key10'], data);
  const result = {
    key: 'another value',
    key2: 'value3',
  };
  expect(object).toEqual(result);
});

it('fill 3', () => {
  fill(object, [], data);
  expect(object).toEqual(data);
});
