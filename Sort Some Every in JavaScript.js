🌟️ Array.sort()
 Definition:

      The sort() method sorts the elements of an array in place, meaning it modifies the original array.

Syntax:
array.sort(compareFunction)

Examples:

1️⃣ Default (String) Sort
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); 
// ["apple", "banana", "cherry"]

2️⃣ Number Sort (Ascending)
const nums = [10, 5, 20, 1];
nums.sort((a, b) => a - b);
console.log(nums); 
// [1, 5, 10, 20]

3️⃣ Number Sort (Descending)
const nums = [10, 5, 20, 1];
nums.sort((a, b) => b - a);
console.log(nums); 
// [20, 10, 5, 1]



🌟 Array.some()
 Definition:

      The some() method tests whether at least one element in the array passes the given condition.

Syntax:
array.some(callback(element))

Examples:

1️⃣ Basic Example
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); 
// true (because 2 and 4 are even)

2️⃣ Checking for Value
const names = ["Sri", "Ram", "Moorthy"];
console.log(names.some(name => name === "Ram")); 
// true

3️⃣ Condition Not Met
const nums = [1, 3, 5];
console.log(nums.some(n => n % 2 === 0)); 
// false (no even number)


🌟 Array.every()
 Definition:

      The every() method tests whether all elements in the array pass the given condition.

Syntax:
array.every(callback(element))

Examples:

1️⃣ Basic Example
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); 
// true

2️⃣ One Fails Condition
const nums = [2, 3, 4];
console.log(nums.every(num => num % 2 === 0)); 
// false (because 3 is odd)

3️⃣ Checking for Type
const arr = [1, 2, "3"];
console.log(arr.every(el => typeof el === "number")); 
// false



