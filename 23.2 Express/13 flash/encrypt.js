import crypto from 'crypto';

export default (text) => {
  const hash = crypto.createHmac('sha512', 'salt');
  hash.update(text);
  return hash.digest('hex');
};
