/* eslint-disable class-methods-use-this */

export default class Connected {
  // BEGIN (write your solution here)
  constructor(tcpConnection) {
    this.tcpConnection = tcpConnection;
  }

  connect() {
    throw new Error('Connection already established');
  }

  getCurrentState() {
    return 'connected';
  }

  write(data) {
    this.tcpConnection.data = data;
  }

  disconnect() {
    this.tcpConnection.state = new this.tcpConnection.states.Disconnected(this.tcpConnection);
  }

  // END
}
