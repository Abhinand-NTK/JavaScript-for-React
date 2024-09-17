// Question 11: How does var behave when used inside a loop?
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); // Output: 3 (var is not block-scoped)
  