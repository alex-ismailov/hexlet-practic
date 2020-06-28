import FakeSubscription from './FakeSubscription.js';

class User {
  constructor(email, currentSubscription = null) {
    this.email = email;
    // BEGIN (write your solution here)
    this.currentSubscription = currentSubscription || new FakeSubscription(this);
    // END
  }

  getCurrentSubscription() {
    return this.currentSubscription;
  }

  isAdmin() {
    return this.email === 'rakhim@hexlet.io';
  }
}

export default User;
