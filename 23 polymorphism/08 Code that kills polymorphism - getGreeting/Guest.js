class Guest {
  constructor() {
    // BEGIN (write your solution here)
    this.type = 'guest';
    // END
    this.name = 'Guest';
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

export default Guest;
