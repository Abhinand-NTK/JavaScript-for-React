// Question 6: What is the scope of a let variable declared inside a block?
function scopeTest() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}
scopeTest();
  