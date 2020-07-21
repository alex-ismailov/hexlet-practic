import DisconnectedState from './states/Disconnected.js';
import ConnectedState from './states/Connected.js';

export default class TcpConnection {
  // BEGIN (write your solution here)
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
    this.states = {
      disconnected: DisconnectedState,
      connected: ConnectedState,
    };
    this.setState('disconnected');
  }

  connect() {
    this.state.connect();
  }

  getCurrentState() {
    return this.state.getName();
  }

  write(data) {
    this.state.write(data);
  }

  disconnect() {
    this.state.disconnect();
  }

  setState(name) {
    this.state = new this.states[name](this);
  }
  // END
}
