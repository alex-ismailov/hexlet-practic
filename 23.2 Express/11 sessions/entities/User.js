// BEGIN (write your solution here)
export default class User {
  guest = false;

  constructor(name, password) {
    this.nickname = name;
    this.password = password;
  }

  isGuest() {
    return this.guest;
  }
}
// END
