import TcpConnection from '../TcpConnection.js';

test('connect1', () => {
  const connection = new TcpConnection('33.22.11.22', 20);
  connection.connect();
  expect(connection.getCurrentState()).toBe('connected');
  connection.write('one');
  connection.write('two');
  connection.disconnect();
  expect(connection.getCurrentState()).toBe('disconnected');
});

test('connect2', () => {
  const connection = new TcpConnection('33.22.11.22', 20);
  connection.connect();
  expect(() => connection.connect()).toThrow();
});

test('connect3', () => {
  const connection = new TcpConnection('33.22.11.22', 20);
  connection.connect();
  connection.disconnect();
  expect(() => connection.disconnect()).toThrow();
});

test('connect4', () => {
  const connection = new TcpConnection('34.22.11.22', 20);
  connection.connect();
  connection.disconnect();
  expect(() => connection.write('one')).toThrow();
});
