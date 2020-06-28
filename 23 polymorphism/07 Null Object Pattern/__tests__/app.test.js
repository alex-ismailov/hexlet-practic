import Subscription from '../Subscription.js';
import User from '../User.js';

describe('Subscription', () => {
  it('test 1', () => {
    const user = new User('vasya@email.com', new Subscription('premium'));
    const result1 = user.getCurrentSubscription().hasPremiumAccess(); // true
    expect(result1).toBeTruthy();
    const result2 = user.getCurrentSubscription().hasProfessionalAccess(); // false
    expect(result2).toBeFalsy();
  });

  it('test 2', () => {
    const user = new User('vasya@email.com', new Subscription('professional'));
    const result1 = user.getCurrentSubscription().hasPremiumAccess(); // false
    expect(result1).toBeFalsy();
    const result2 = user.getCurrentSubscription().hasProfessionalAccess(); // true
    expect(result2).toBeTruthy();
  });

  it('test 3', () => {
    const user = new User('vasya@email.com');
    const result1 = user.getCurrentSubscription().hasPremiumAccess(); // false
    expect(result1).toBeFalsy();
    const result2 = user.getCurrentSubscription().hasProfessionalAccess(); // false
    expect(result2).toBeFalsy();
  });

  it('test 4', () => {
    const user = new User('rakhim@hexlet.io'); // администратор, проверяется по емейлу
    const result1 = user.getCurrentSubscription().hasPremiumAccess(); // true
    expect(result1).toBeTruthy();
    const result2 = user.getCurrentSubscription().hasProfessionalAccess(); // true
    expect(result2).toBeTruthy();
  });
});
