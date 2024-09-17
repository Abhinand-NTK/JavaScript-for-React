// Question 12: What happens when we declare a variable with var outside of any function?
var x = 10;
function test() {
  console.log(x); // Accessible due to function scope
}
test();
console.log(x); // Accessible outside as well
  