/* eslint-disable class-methods-use-this */

export default class Disconnected {
  // BEGIN (write your solution here)
  constructor(connection) {
    this.connection = connection;
  }

  connect() {
    this.connection.setState('connected');
  }

  getName() {
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
