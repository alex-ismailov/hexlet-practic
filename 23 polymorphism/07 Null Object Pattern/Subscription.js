class Subscription {
  constructor(subscriptionPlanName) {
    this.subscriptionPlanName = subscriptionPlanName;
  }

  hasProfessionalAccess() {
    return this.subscriptionPlanName === 'professional';
  }

  hasPremiumAccess() {
    return this.subscriptionPlanName === 'premium';
  }
}

export default Subscription;
