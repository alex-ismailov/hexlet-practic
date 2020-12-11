import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const singleTagsList = new Set(['hr', 'img', 'br']);

// export default (name, attributes, body, children) => (
//   singleTagsList.has(name)
//     ? new SingleTag(name, attributes)
//     : new PairedTag(name, attributes, body, children)
// );

/* teacher solution */
export default (name, ...rest) => {
  const CurrentClass = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new CurrentClass(name, ...rest);
};
// END
