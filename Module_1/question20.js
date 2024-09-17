// Question 20: What happens when const is used with non-primitive data types (e.g., objects)?
const obj = { name: 'John' };
obj.name = 'Jane'; // Allowed (modifying properties)
console.log(obj);
// obj = {}; // Error: Assignment to constant variable.
  