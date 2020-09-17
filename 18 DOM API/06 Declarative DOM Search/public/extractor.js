export default (document) => {
  // BEGIN (write your solution here)
  const root = document.querySelector('.content');

  const categoryTitleElement = root.querySelector('h1');
  const categoryTitle = categoryTitleElement.innerHTML;

  const categoryDescriptionElement = root.querySelector('.description');
  const categoryDescription = categoryDescriptionElement.innerHTML;

  const itemsElements = root.querySelectorAll('.links div');
  const items = Array.from(itemsElements).map((element) => {
    const titleElement = element.querySelector('a');
    const descriptionElement = element.querySelector('p');

    return {
      title: titleElement.innerHTML,
      description: descriptionElement.innerHTML,
    };
  });

  return {
    title: categoryTitle,
    description: categoryDescription,
    items,
  };
  // END
};
