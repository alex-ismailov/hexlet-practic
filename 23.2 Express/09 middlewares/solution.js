import UAParser from 'ua-parser-js';

// BEGIN (write your solution here)
export default (req, res, next) => {
  const parser = new UAParser(req.headers['user-agent']);
  req.useragent = parser.getResult();
  next();
};
// END
