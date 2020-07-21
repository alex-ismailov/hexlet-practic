/* eslint-disable class-methods-use-this */

export default class Disconnected {
  // BEGIN (write your solution here)
  constructor(tcpConnection) {
    this.tcpConnection = tcpConnection;
  }

  connect() {
    this.tcpConnection.state = new this.tcpConnection.states.Connected(this.tcpConnection);
  }

  getCurrentState() {
    return 'disconnected';
  }

  write() {
    throw new Error('You cannot write connection disconnected');
  }

  disconnect() {
    throw new Error('You cannot disconnect the connection is disconnected already');
  }
  // END
}
