// BEGIN (write your solution here)
let id = 0;
const getId = () => {
  const currentId = id;
  id += 1;
  return currentId;
};

export default class Post {
  constructor(title, body) {
    this.id = getId();
    this.title = title;
    this.body = body;
  }
}
// END
