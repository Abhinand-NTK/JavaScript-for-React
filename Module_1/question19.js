// Question 19: How does var hoisting differ from let/const hoisting?
console.log(a); // undefined (due to hoisting of var)
var a = 10;
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
  