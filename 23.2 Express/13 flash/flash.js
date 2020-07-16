// BEGIN (write your solution here)
import assert from 'assert';

export default () => (req, res, next) => {
  assert(req.session, 'a req.session is required!');
  res.locals.flash = req.session.flash || [];
  res.flash = (type, message) => {
    const messages = res.locals.flash;
    messages.push({ type, message });
    req.session.flash = messages;
  };

  next();
};
// END
