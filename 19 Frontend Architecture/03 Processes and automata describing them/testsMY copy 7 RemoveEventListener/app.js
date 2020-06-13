const handleOnClick = (event, arg) => {
  event.target.innerHTML = arg;
};

document.body.addEventListener('click', (event) => handleOnClick(event, 'some text info or html tag'));
