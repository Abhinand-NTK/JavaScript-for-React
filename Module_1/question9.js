// Question 9: What happens when a const object or array is modified?
const person = { name: 'Alice', age: 25 };
person.age = 30; // Allowed (modifying properties)
console.log(person);
// person = {}; // Error: Assignment to constant variable.
const numbers = [1, 2, 3];
numbers.push(4); // Allowed
console.log(numbers);
// numbers = [4, 5, 6]; // Error: Assignment to constant variable.
  