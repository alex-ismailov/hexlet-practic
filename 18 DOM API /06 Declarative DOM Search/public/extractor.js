export default (document) => {
  // BEGIN (write your solution here)
  const content = document.querySelector('.content');
  const categoryTitle = content.querySelector('h1').innerHTML;
  const categoryDescription = content.querySelector('.description').innerHTML;
  const links = content.querySelector('.links');
  const articles = links.querySelectorAll('div');

  const items = [];
  articles.forEach((article) => {
    const title = article.querySelector('a').innerHTML;
    const description = article.querySelector('p').innerHTML;
    items.push({ title, description });
  });

  return {
    title: categoryTitle,
    description: categoryDescription,
    items,
  };
  // END
};
