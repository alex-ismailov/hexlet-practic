import UAParser from 'ua-parser-js';

// BEGIN (write your solution here)
export default (req, res, next) => {
  req.useragent = UAParser(req.headers['user-agent']);
  next();
};
// END
