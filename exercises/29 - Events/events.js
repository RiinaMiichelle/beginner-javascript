const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.coolButton');

function handleClick() {
  console.log('IT GOT CLICKED!');
}

const hooray = () => {
  console.log('Hooray!');
};

function buyItem() {
  console.log('BUYING ITEM');
}

butts.addEventListener('click', hooray);
coolButton.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');
console.log(buyButtons);

buyButtons.forEach(function(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
});
