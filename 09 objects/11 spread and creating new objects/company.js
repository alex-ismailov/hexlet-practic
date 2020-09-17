// BEGIN (write your solution here)
export default (name = 'Hexlet', data = { state: 'moderating' }) => ({
  name,
  ...data,
  createdAt: Date.now(),
});
// END
