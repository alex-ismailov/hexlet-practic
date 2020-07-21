/* eslint-disable class-methods-use-this */

export default class Connected {
  // BEGIN (write your solution here)
  constructor(connection) {
    this.connection = connection;
    this.buffer = [];
  }

  connect() {
    throw new Error('Connection already established');
  }

  getName() {
    return 'connected';
  }

  write(data) {
    this.buffer.push(data);
  }

  disconnect() {
    this.connection.setState('disconnected');
  }
  // END
}
