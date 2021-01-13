// Make a div
const div = document.createElement('div');

// Add text to it
div.textContent = 'I am a div';

// add a class of wrapper to it
div.classList.add('wrapper');
console.log(div);

// put it into the body
document.body.appendChild(div);

// make an unordered list
// const list = document.createElement('ul');

const ul = `<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>`;

// add three list items with the words "one, two, three" in them
// const li1 = document.createElement('li');
// li1.textContent = 'one';
// list.appendChild(li1);

// const li2 = document.createElement('li');
// li2.textContent = 'two';
// list.appendChild(li2);

// const li3 = document.createElement('li');
// li3.textContent = 'three';
// list.appendChild(li3);

// put that list into the above wrapper
// div.insertAdjacentElement('beforeend', ul);

div.innerHTML = ul;
console.log(div);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://source.unsplash.com/random/300x300';

// set the width to 250
img.width = 250;
img.height = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'cute puppy';

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  </div>
`;

// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button"> &times; Delete</button>
  </div>
  `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('sarina', 29, 140);
cardsHTML += generatePlayerCard('robbie', 28, 160);
cardsHTML += generatePlayerCard('max', 6, 200);
cardsHTML += generatePlayerCard('ziggy', 8, 75);
console.log(cardsHTML);

// const playerCard1 = generatePlayerCard(robbie, 28, 160);
// const playerCard2 = generatePlayerCard(sarina, 29, 140);
// const playerCard3 = generatePlayerCard(chelsea, 29, 140);
// const playerCard4 = generatePlayerCard(dee, 30, 150);

// append those cards to the div
cards.innerHTML = cardsHTML;

// newDiv.appendChild(playerCard1);
// newDiv.appendChild(playerCard2);
// newDiv.appendChild(playerCard3);
// newDiv.appendChild(playerCard4);

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);

// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
  console.log('Delete Card TODO');
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
