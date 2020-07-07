let id = 1000;

export const nextId = () => {
  id += 1;
  return id;
};

export const validate = ({ name, phone }) => {
  // BEGIN (write your solution here)
  const findErrors = (itemName, itemValue, regexp) => {
    const errors = [];
    if (!itemValue) {
      const err = {
        source: itemName,
        title: 'can\'t be blank',
      };
      errors.push(err);
      return errors;
    }
    if (!itemValue.match(regexp)) {
      const err = {
        source: itemName,
        title: 'bad format',
      };
      errors.push(err);
      return errors;
    }
    return errors;
  };

  const nameRegexp = /^[\w\.]+$/; // ^[\w]+[\w\. ]*$
  const phoneRegexp = /^[\d]+[\d-]*$/;
  const nameErrors = findErrors('name', name, nameRegexp);
  const phoneErrors = findErrors('phone', phone, phoneRegexp);

  return [...nameErrors, ...phoneErrors];
  // END
};
