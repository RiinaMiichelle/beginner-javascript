console.log('it works!');

const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/${width}`;
const desc = `Cute Pup`;
const myHTML = `
<div class="wrapper">
  <h2>Cute ${desc}</h2>
  <img src="${src}" alt="${desc}"/>
  </div>
`;

// turn a string into a DOM element 
const myFragment = document.createRange()
.createContextualFragment(myHTML);


document.body.appendChild(myFragment);


