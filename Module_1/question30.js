// Question 30: How does var handle scope inside and outside loops?
for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // Output: 3 (var is not block-scoped)
  