export default class {
  guest = false;

  constructor(nickname, passwordDigest) {
    this.nickname = nickname;
    this.passwordDigest = passwordDigest;
  }

  isGuest() {
    return this.guest;
  }
}
