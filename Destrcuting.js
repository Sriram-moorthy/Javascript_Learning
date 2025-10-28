Destructuring in JavaScript:
Definition:

    Destructuring is a shortcut that lets you unpack values from arrays or objects into individual variables.

1️⃣ Array Destructuring

🔹 Basic Example:
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


🔹 Skipping Values:
const [x, , y] = [1, 2, 3];
console.log(x, y); // 1 3


🔹 Default Values:
const [p = 5, q = 10] = [7];
console.log(p, q); // 7 10


🔹 Swapping Variables:
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1


🔹 Using with Rest:
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]


2️⃣ Object Destructuring

🔹 Basic Example:
const person = { name: "Sri", age: 21 };
const { name, age } = person;
console.log(name); // Sri
console.log(age);  // 21


🔹 Renaming Variables:
const user = { id: 1, username: "sriram" };
const { username: userName } = user;
console.log(userName); // sriram


🔹 Default Values:
const { city = "Chennai", country = "India" } = { city: "Coimbatore" };
console.log(city, country); // Coimbatore India


🔹 Nested Destructuring:
const student = {
  info: {
    name: "Sri",
    marks: { math: 95, science: 90 }
  }
};
const { info: { name, marks: { math } } } = student;
console.log(name); // Sri
console.log(math); // 95


🔹 Using Rest with Objects:
const obj = { a: 1, b: 2, c: 3 };
const { a, ...others } = obj;
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }
