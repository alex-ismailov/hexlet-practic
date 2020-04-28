export default class PercentCard {
  constructor(name, percent) {
    this.name = name;
    this.percent = percent;
  }

  damage(health) {
    return Math.round(health * (this.percent / 100));
  }
}
