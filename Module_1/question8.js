// Question 8: How does hoisting work with var, let, and const?
console.log(a); // undefined (var is hoisted)
var a = 5;
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
  