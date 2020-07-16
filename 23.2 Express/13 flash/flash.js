// BEGIN (write your solution here)
import assert from 'assert';

export default () => (req, res, next) => {
  assert(req.session, 'a req.session is required!');
  res.locals.flash = req.session.flash || [];
  req.session.flash = [];
  res.flash = (type, message) => {
    req.session.flash.push({ type, message });
  };
  next();
};
// END
