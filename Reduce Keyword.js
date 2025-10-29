🌟 Array.reduce()
 Definition:

      The reduce() method executes a callback function on each element of an array, resulting in a single output value (like sum, product, or object).

Syntax:
array.reduce((accumulator, currentValue, index, array) => {
  // logic
}, initialValue);

Parameter	Description:

      1.accumulator	Stores the accumulated result after each iteration
      2.currentValue	Current element being processed
      3.index	(Optional) Index of the current element
      4.array	(Optional) The array being processed

Examples:

1️⃣ Sum of Numbers
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); 
// 10

2️⃣ Product of Numbers
const nums = [2, 3, 4];
const product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product); 
// 24

3️⃣ Find Maximum
const nums = [5, 10, 3, 8];
const max = nums.reduce((acc, curr) => acc > curr ? acc : curr);
console.log(max); 
// 10

4️⃣ Flatten an Array
const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); 
// [1, 2, 3, 4, 5, 6]

5️⃣ Count Occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 3, banana: 2, orange: 1 }

