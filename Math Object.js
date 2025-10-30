// Math.abs(x) - Returns the absolute value of a number
console.log(Math.abs(-7));  // Output: 7
console.log(Math.abs(3.5)); // Output: 3.5

//Math.sign(x) - Returns the sign of a number, indicating whether the number is positive, negative or zero
console.log(Math.sign(-10)); // Output: -1
console.log(Math.sign(0));  // Output: 0  
console.log(Math.sign(5));  // Output: 1

//Math.sqrt(x) - Returns the square root of a number
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(2));  // Output: 1.4142135623730951 

//Math.cbrt(x) - Returns the cube root of a number
console.log(Math.cbrt(27)); // Output: 3
console.log(Math.cbrt(8));  // Output: 2  
console.log(Math.cbrt(-8)); // Output: -2

//Math.pow(base, exponent) - Returns the base to the exponent power
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(5, 2)); // Output: 25  

//Math.min(...values) - Returns the smallest of zero or more numbers
console.log(Math.min(3, 1, 4, 1, 5, 9)); // Output: 1

//Math.max(...values) - Returns the largest of zero or more numbers
console.log(Math.max(3, 1, 4, 1, 5, 9)); // Output: 9

//Math.random() - Returns a pseudo-random number between 0 and 1
let randomValue = Math.random();
console.log(randomValue.toFixed(2)); // Output: A random number between 0 and 1

//Math.round(x) - Rounds a number to the nearest integer
console.log(Math.round(4.5)); // Output: 5  
console.log(Math.round(4.4)); // Output: 4

//Math.floor(x) - Rounds a number down to the nearest integer
console.log(Math.floor(4.9)); // Output: 4  
console.log(Math.floor(4.1)); // Output: 4

//Math.ceil(x) - Rounds a number up to the nearest integer
console.log(Math.ceil(4.1)); // Output: 5  
console.log(Math.ceil(4.9)); // Output: 5

//Math.trunc(x) - Returns the integer part of a number by removing any fractional digits
console.log(Math.trunc(4.9)); // Output: 4  
console.log(Math.trunc(-4.9)); // Output: -4  
