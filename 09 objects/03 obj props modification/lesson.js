/* eslint-disable no-param-reassign */

import _ from 'lodash';

export default (obj) => {
  const [name, description] = Object.keys(obj);
  obj[name] = _.capitalize(obj[name]);
  obj[description] = obj[description].toLowerCase();
};
// END
