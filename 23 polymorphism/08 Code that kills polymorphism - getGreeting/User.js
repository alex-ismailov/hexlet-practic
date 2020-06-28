class User {
  constructor(name) {
    // BEGIN (write your solution here)
    this.type = 'user';
    // END
    this.name = name;
  }

  getName() {
    return this.name;
  }

  // BEGIN (write your solution here)
  getType() {
    return this.type;
  }
  // END
}

export default User;
