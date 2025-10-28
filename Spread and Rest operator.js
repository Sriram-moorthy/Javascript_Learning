Spread Operator (...):
 Definition:

    The spread operator expands (spreads) elements of an iterable (like an array or string) into individual elements.

 Syntax:
    ...iterable

Examples:

1️⃣️Array Copy
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1];
  console.log(arr2); // [1, 2, 3]

2️⃣ Array Merge
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

3️⃣ Spread in Function Calls
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30];
console.log(sum(...numbers)); // 60

4️⃣ Spread in Objects
const obj1 = { name: "Sri", age: 21 };
const obj2 = { city: "Chennai" };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { name: "Sri", age: 21, city: "Chennai" }


Rest Parameter (...):
 Definition:

    The rest parameter collects multiple arguments into a single array.

Syntax:
    function func(...args) { }

Examples:

1️⃣ Collecting Arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


2️⃣ Rest with Other Parameters
function intro(name, ...hobbies) {
  console.log(`${name}'s hobbies: ${hobbies.join(", ")}`);
}
intro("Sri", "Coding", "Reading", "Music");
// Output: Sri's hobbies: Coding, Reading, Music


3️⃣ Destructuring with Rest
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
