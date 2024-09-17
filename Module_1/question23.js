// Question 23: What happens when you declare a variable inside a block with var?
if (true) {
  var x = 10;
}
console.log(x); // Output: 10 (not block-scoped)
  