import Node from '../Node';
import reverse from '../linkedList';

describe('reverse', () => {
  it('test 1', () => {
    const list = new Node(true);
    const reversedList = reverse(list);
    expect(reversedList).toEqual(list);
  });

  it('test 2', () => {
    const numbers = new Node(1, new Node(2, new Node(3)));
    const reversedNumbers = reverse(numbers);
    expect(reversedNumbers.getValue()).toBe(3);
    expect(reversedNumbers.getNext().getValue()).toBe(2);
    expect(reversedNumbers.getNext().getNext().getValue()).toBe(1);
  });
});
