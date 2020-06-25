import _ from 'lodash';

// BEGIN (write your solution here)

const dispatcher = {
  img: 'src',
  link: 'href',
  a: 'href',
};

const getLinks = (tags) => {
  const links = tags.map((tag) => _.get(tag, dispatcher[tag.name], ''))
  return links.filter((item) => item !== '');
};

/* teacher solution */
// const getLinks = (tags) => {
//   const filteredTags = tags.filter((tag) => _.has(dispatcher, tag.name));
//   const paths = filteredTags.map((tag) => tag[dispatcher[tag.name]]);

//   return paths;
// };

export default getLinks;
// END

// const tags = [
//   { name: 'img', src: 'hexlet.io/assets/logo.png' },
//   { name: 'div' },
//   { name: 'link', href: 'hexlet.io/assets/style.css' },
//   { name: 'h1' },
// ];

// console.log(getLinks(tags));