// Question 24: How does block scoping work with let and const inside loops?
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2 (block-scoped)
}
// console.log(i); // Error: i is not defined (block-scoped)
  