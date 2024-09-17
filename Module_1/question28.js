// Question 28: Can you declare a variable with let inside a function and access it outside?
function test() {
  let x = 10;
  console.log(x); // Output: 10
}
// console.log(x); // Error: x is not defined (block-scoped)
test();
  