import DisconnectedState from './states/Disconnected.js';
import ConnectedState from './states/Connected.js';

export default class TcpConnection {
  // BEGIN (write your solution here)
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
    this.states = {
      Disconnected: DisconnectedState,
      Connected: ConnectedState,
    };
    this.state = new this.states.Disconnected(this);
    this.data = '';
  }

  connect() {
    this.state.connect();
  }

  getCurrentState() {
    return this.state.getCurrentState();
  }

  write(data) {
    this.state.write(data);
  }

  disconnect() {
    this.state.disconnect();
  }
  // END
}
