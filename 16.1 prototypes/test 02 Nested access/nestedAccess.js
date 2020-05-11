/* Добавьте в Object.prototype функцию hash, которая позволяет извлекать вложенные значения из объекта.

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

obj.hash('car'); // undefined
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined */

/* eslint-disable no-extend-native */

// BEGIN (write your solution here)
Object.prototype.hash = function hash(keysStr) {
  const keys = keysStr.split('.');
  return keys.reduce((acc, key) => (acc === undefined
    ? undefined
    : acc[key]
  ), this);
};
// END
