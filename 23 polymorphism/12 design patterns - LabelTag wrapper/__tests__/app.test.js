import InputTag from '../tags/InputTag.js';
import LabelTag from '../tags/LabelTag.js';

it('test tags', () => {
  const inputTag = new InputTag('submit', 'Save');
  const labelTag = new LabelTag('Press Submit', inputTag);
  const expected = '<label>Press Submit<input type="submit" value="Save"></label>';
  expect(labelTag.render()).toBe(expected);
});
