export default class OctokitFake {
  constructor(data) {
    this.data = data;
  }

  repos = {
    listForUser: () => Promise.resolve({ data: this.data }),
  }
}
