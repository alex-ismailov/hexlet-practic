import '../wrap';

function speak(name) {
  return `Hello ${name}`;
}

describe('Wrap', () => {
  it('should work', () => {
    const newSpeak = speak.wrap((original, yourName, myName) => {
      const greeting = original(yourName);
      return `${greeting}, my name is ${myName}`;
    });

    const greeting1 = newSpeak('Mary', 'Kate');
    expect(greeting1).toBe('Hello Mary, my name is Kate');

    const greeting2 = newSpeak('Kate', 'Mary');
    expect(greeting2).toBe('Hello Kate, my name is Mary');
  });
});
