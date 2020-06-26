// BEGIN (write your solution here)
const excluded = ['name', 'tagType', 'body'];

const getAttributesLine = (tag) => {
  const attrs = Object.keys(tag);
  const attributesLine = attrs
    .filter((attr) => !excluded.includes(attr))
    .map((attr) => ` ${attr}="${tag[attr]}"`)
    .join('');

  return attributesLine;
};

const mapping = {
  single: (tag) => {
    const attributesLine = getAttributesLine(tag);
    const html = `<${tag.name}${attributesLine}>`;
    return html;
  },
  pair: (tag) => {
    const attributesLine = getAttributesLine(tag);
    const html = `<${tag.name}${attributesLine}>${tag.body}</${tag.name}>`;
    return html;
  },
};

export default (tag) => {
  const build = mapping[tag.tagType];
  return build(tag);
};

// END
