import faker from 'faker';

const getDefaultData = () => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
});

const buildUser = (data) => {
  const defaultData = getDefaultData();
  return { ...defaultData, ...data };
};

const buildUser2 = () => getDefaultData();

const functions = {
  right1: buildUser,
  wrong1: buildUser2,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
