// BEGIN (write your solution here)
const mapping = {
  user: (user) => `Hello ${user.getName()}!`,
  guest: (user) => `Nice to meet you ${user.getName()}!`,
};

const getGreeting = (user) => {
  const buildGreeting = mapping[user.getType()];
  return buildGreeting(user);
};

export default getGreeting;
// END
