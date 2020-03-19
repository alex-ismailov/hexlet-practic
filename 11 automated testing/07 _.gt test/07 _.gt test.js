test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(0, 1)).toBeFalsy();
  expect(gt(1, 1)).toBeFalsy();
  expect(gt()).toBeFalsy();
});