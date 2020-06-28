// BEGIN (write your solution here
class FakeSubscription {
  constructor(user) {
    this.access = user.isAdmin();
  }

  hasProfessionalAccess() {
    return this.access;
  }

  hasPremiumAccess() {
    return this.access;
  }
}

export default FakeSubscription;
// END
