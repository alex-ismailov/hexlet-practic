// BEGIN (write your solution here)
export default class User {
  constructor(name, password) {
    this.nickname = name;
    this.password = password;
    this.guest = false;
  }

  isGuest() {
    return this.guest;
  }
}
// END


