
// Question 20: What is the purpose of `let` in JavaScript?
// Answer: `let` allows you to declare block-scoped variables.
let x = 10;
if (true) {
 let x = 20;
 console.log(x);  // 20
}
console.log(x);  // 10
    