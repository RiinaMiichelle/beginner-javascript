const wes = document.querySelector('.wes');

console.log(wes);

// //difference between a node and an element 
// //


// console.log(wes.children); //all of child elements
// console.log(wes.childNodes); //all of the nodes

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);