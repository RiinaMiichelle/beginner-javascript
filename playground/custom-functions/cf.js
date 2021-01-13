// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('running calculate bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// //Function call Or run**
// const wesTotal = 500;
// const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// //function definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('Sarina');
// console.log(greeting);

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name) {
//   return `HEY ${name.toUpperCase()}`;
// }

// yell(doctorize('wes'));
