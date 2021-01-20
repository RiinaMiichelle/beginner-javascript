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
// console.log(buyButtons);

function handleBuyButtonClick(event) {
  // const button = event.target;
  // console.log(button.textContent);
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up (propagation)
  // event.stopPropagation();
}

window.addEventListener('click', function(event) {
  console.log('You clicked the window!');
  console.log(event.target);
  console.log(event.type);
  console.log(event.bubbles);
  // event.stopPropagation();
});

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(event) {
  console.log(event.currentTarget);
  console.lot(this);
  // will always be equal to whatever is left of the dot of add event listener (in this case)
});
