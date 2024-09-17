// Question 5: What is the scope of a var variable declared inside a function?
function scopeTest() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}
scopeTest();
  