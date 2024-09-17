// Question 4: What happens if you redeclare a variable with var, let, and const?
var x = 5;
var x = 10; // Allowed with var
let y = 5;
// let y = 10; // Uncaught SyntaxError: Identifier 'y' has already been declared
const z = 5;
// const z = 10; // Uncaught SyntaxError: Identifier 'z' has already been declared
console.log(x, y, z);
  