// Shallow copy example
let obj1={
    name:"Alice",
    age:25,
    hobbies:{
        first:"Reading",
        second:"Traveling"
    }
}
let shallow={...obj1}; // Shallow copy using spread operator
shallow.name="Bob";
shallow.hobbies.first="Cooking";
console.log("Original Object:",obj1);
console.log("Shallow Copied Object:",shallow);
// Output:
// Original Object: { name: 'Alice', age: 25, hobbies: { first: 'Cooking', second: 'Traveling' } }
// Shallow Copied Object: { name: 'Bob', age: 25, hobbies: { first: 'Cooking', second: 'Traveling' } }
// In shallow copy, changes to nested objects in the copied object affect the original object beacause only references are copied for nested objects.
// In shallow copy, only the top-level properties are copied, while nested objects are still referenced.

// Deep copy example
let obj2={
    name:"Charlie",
    age:30,
    hobbies:{
        first:"Gaming",
        second:"Hiking"
    }
}
let deep={...obj2,hobbies:{...obj2.hobbies}}; // Deep copy using spread operator for nested object
deep.name="David";
deep.hobbies.first="Swimming";
console.log("Original Object:",obj2);
console.log("Deep Copied Object:",deep);
// Output:
// Original Object: { name: 'Charlie', age: 30, hobbies: { first: 'Gaming', second: 'Hiking' } }
// Deep Copied Object: { name: 'David', age: 30, hobbies: { first: 'Swimming', second: 'Hiking' } }
// In deep copy, changes to nested objects in the copied object do not affect the original object because new copies of nested objects are created.
// In deep copy, all levels of the object are copied, ensuring complete independence between the original and copied objects.

// Deep copy using JSON methods
let jsonDeepCopy=JSON.parse(JSON.stringify(obj2));
jsonDeepCopy.hobbies.second="Dancing";
console.log("Original Object after JSON Deep Copy:",obj2);
console.log("JSON Deep Copied Object:",jsonDeepCopy);

// Shallow copy for array
arr=[1,2,3,[4,5]];
let shallowArr=[...arr];
shallowArr[3][0]=99;
console.log("Original Array:",arr);
console.log("Shallow Copied Array:",shallowArr);
// Output:
// Original Array: [ 1, 2, 3, [ 99, 5 ] ]
// Shallow Copied Array: [ 1, 2, 3, [ 99, 5 ] ]
// In shallow copy of array, changes to nested arrays in the copied array affect the original array.

//Deep copy in arrays
let deepArr=JSON.parse(JSON.stringify(arr));
deepArr[3][1]=88;
arr[3][0]=77;
console.log("Original Array after Deep Copy:",arr);
console.log("Deep Copied Array:",deepArr);
