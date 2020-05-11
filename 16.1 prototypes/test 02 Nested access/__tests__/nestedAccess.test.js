import '../nestedAccess';

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

describe('Hash', () => {
  it('should work', () => {
    expect(obj.hash('person.history.bio')).toEqual({ funFact: 'I like fishing.' });
    expect(obj.hash('top')).toBeUndefined();
    expect(obj.hash('person.history.homeStreet')).toBeUndefined();
    expect(obj.hash('person.animal.pet.needNoseAntEater')).toBeUndefined();
  });
});
