export const make = (name, attributes = {}) => ({ name, attributes });
export const getAttribute = (attrName, tag) => tag.attributes[attrName];
export const getName = (tag) => tag.name;
