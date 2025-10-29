// charAt
const exampleString = "Hello, World!";
const charAtIndex5 = exampleString.charAt(5);
console.log(`Character at index 5: ${charAtIndex5}`); // Output: "", space character

// concat
const concatenatedString = exampleString.concat(" How are you?");
console.log(`Concatenated String: ${concatenatedString}`); // Output: Hello, World! How are you?

//charCodeAt
const charCodeAtIndex0 = exampleString.charCodeAt(0);
console.log(`Character code at index 0: ${charCodeAtIndex0}`); // Output: 72 (ASCII code for 'H')

// includes
const includesWorld = exampleString.includes("World");
console.log(`Includes 'World': ${includesWorld}`); // Output: true

// indexOf
const indexOfComma = exampleString.indexOf(",");
console.log(`Index of ',': ${indexOfComma}`); // Output: 5  

// replace
const replacedString = exampleString.replace("World", "JavaScript");
console.log(`Replaced String: ${replacedString}`); // Output: Hello, JavaScript!  

// toLowerCase
const lowerCaseString = exampleString.toLowerCase();
console.log(`Lowercase String: ${lowerCaseString}`); // Output: hello, world!

// toUpperCase
const upperCaseString = exampleString.toUpperCase();
console.log(`Uppercase String: ${upperCaseString}`); // Output: HELLO, WORLD!

//repeat
const repeatedString = "Ha! ".repeat(3);
console.log(`Repeated String: ${repeatedString}`); // Output: Ha! Ha! Ha!

// slice
const slicedString = exampleString.slice(7, 12);
console.log(`Sliced String: ${slicedString}`); // Output: World
// Slice accepts negative indices
const negativeSlicedString = exampleString.slice(-6, -1);
console.log(`Negative Sliced String: ${negativeSlicedString}`); // Output: World

//Substring
const substringExample = exampleString.substring(7, 12);
const substring1 = exampleString.substring(-5, 5); // negative index treated as 0
const substring2 = exampleString.substring(5, 0); // indices swapped
console.log(`Substring with swapped indices: ${substring2}`); // Output: Hello
console.log(`Substring with negative index: ${substring1}`); // Output: Hello
console.log(`Substring Example: ${substringExample}`); // Output: World

//Split
const csvString = "apple,banana,cherry,date";
const splitArray = csvString.split(",");
const splitArrayLimit = csvString.split(",", 2);
console.log(`Split Array with limit 2: ${splitArrayLimit}`); // Output: [ 'apple', 'banana' ]
console.log(`Split Array: ${splitArray}`); // Output: [ 'apple', 'banana', 'cherry', 'date' ]

//StartsWith
const startsWithHello = exampleString.startsWith("Hello");
const startsWithWorld = exampleString.startsWith("World", 7);
const startsWithH = exampleString.startsWith("H");  
console.log(`Starts with 'H': ${startsWithH}`); // Output: true
console.log(`Starts with 'World' at position 7: ${startsWithWorld}`); // Output: true  
console.log(`Starts with 'Hello': ${startsWithHello}`); // Output: true

// EndsWith
const endsWithExclamation = exampleString.endsWith("!");
const endsWithWorld = exampleString.endsWith("World!", 12);
const endsWithD = exampleString.endsWith("d");  
console.log(`Ends with 'd': ${endsWithD}`); // Output: false
console.log(`Ends with 'World!' at length 12: ${endsWithWorld}`); // Output: true  
console.log(`Ends with '!': ${endsWithExclamation}`); // Output: true
