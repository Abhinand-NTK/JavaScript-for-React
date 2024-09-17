// Question 29: What is the behavior of var in terms of function scoping?
function test() {
  var x = 5;
}
console.log(x); // Error: x is not defined (function-scoped)
  