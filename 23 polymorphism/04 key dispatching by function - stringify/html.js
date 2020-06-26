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

const stringify = (tag) => {
  const build = mapping[tag.tagType];
  return build(tag);
};

// END
// const hrTag = {
//   name: 'hr',
//   class: 'px-3',
//   id: 'myid',
//   tagType: 'single',
// };
// const html1 = stringify(hrTag); // <hr class="px-3" id="myid">
// console.log(html1);

// const divTag = {
//   name: 'div',
//   tagType: 'pair',
//   body: 'text2',
//   id: 'wow',
// };
// const html2 = stringify(divTag); // <div id="wow">text2</div>
// console.log(html2);

// const emptyDivTag = {
//   name: 'div',
//   tagType: 'pair',
//   body: '',
//   id: 'empty',
// };

// const html3 = stringify(emptyDivTag); // <div id="empty"></div>
// console.log(html3);

export default stringify;
