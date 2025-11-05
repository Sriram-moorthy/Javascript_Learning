// Object Properties and Methods in JavaScript

// Creating a simple object

let person={
    firstName:"John",
    lastName:"Doe",};

//Object.create
let employee=Object.create(person);
console.log(employee.__proto__); // Output: person object
console.log(employee.firstName); // Output: John
employee.firstName="Jane";
console.log(employee.firstName); // Output: Jane
console.log(person.firstName); // Output: John

// Prototypal Inheritance
let manager=Object.create(employee);
console.log(manager.firstName); // Output: Jane
console.log(manager.lastName); // Output: Doe
console.log(manager.__proto__); // Output: employee object

// Explaantion of Object.create
/*
Object.create() method creates a new object, using an existing object as the prototype of the newly created object. This allows for prototypal inheritance, where the new object can access properties and methods of the prototype object.
In the example above, 'employee' is created with 'person' as its prototype. Therefore, 'employee' can access 'firstName' and 'lastName' from 'person'. When we create 'manager' with 'employee' as its prototype, 'manager' can access properties from both 'employee' and 'person'.
*/

// __proto__ Property: Accessing the Prototype 
console.log(employee.__proto__); // Output: person object
console.log(manager.__proto__); // Output: employee object

//Object.assign

let person1={
    name:"Alice",
    age:30,
}
let jobDetails=Object.assign({role:"Developer",salary:50000},person1);
console.log(jobDetails); 
// Output: { role: 'Developer', salary: 50000, name: 'Alice', age: 30 }
jobDetails=Object.assign(person1,{role:"Developer",salary:50000});
console.log(jobDetails); 
// Output: { name: 'Alice', age: 30, role: 'Developer', salary: 50000 }


//Object.entries: Converting Object to Array
let car={
    make:"Toyota",
    model:"Camry",
    year:2020,
}
let carEntries=Object.entries(car);
carEntries.push(['color','Blue']);
console.log(carEntries); 
// Output: [ [ 'make', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2020 ], [ 'color', 'Blue' ] ]


//Object.fromEntries: Converting Array to Object
let normalArray=Object.fromEntries(carEntries);
console.log(normalArray); 
// Output: { make: 'Toyota', model: 'Camry', year: 2020 , color: 'Blue' }


//Object.keys: Getting Object Keys
let book={
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    year:1925,
}
let bookKeys=Object.keys(book);
console.log(bookKeys); 
// Output: [ 'title', 'author', 'year' ]


//Object.values: Getting Object Values
let bookValues=Object.values(book);
console.log(bookValues); 
// Output: [ 'The Great Gatsby', 'F. Scott Fitzgerald', 1925 ]  


//Object.freeze: Freezing an Object so that its properties cannot be changed
let laptop={
    brand:"Dell",
    model:"XPS 13",
    year:2021,
}
Object.freeze(laptop);
laptop.year=2022; // This will not change the year property
console.log(laptop.year); 
// Output: 2021

//Object.isFrozen: Checking if an Object is Frozen
let isLaptopFrozen=Object.isFrozen(laptop);
console.log(isLaptopFrozen); 
// Output: true
console.log(Object.isFrozen(person)); 
// Output: false
