let person1={
    name:"John",
    age:28,
    greet:function(greeting){
        console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(person1.greet("Hello")); // Output: Hello, my name is John and I am 28 years old.

// Note : If we use ananymous function we can use this keyword to refer the object calling the function
// The this keyword refers to the object that is executing the current function.

// For arrow function
let person2={
    name:"Emily",
    age:32,
    greet:(greeting)=>{
        console.log(`${greeting}, my name is ${person2.name} and I am ${person2.age} years old.`);
    }
};
console.log(person2.greet("Hi")); // Output: Hi, my name is Emily and I am 32 years old.

let anotherPerson={
    name:"Michael",
    age:40,
    gereet:(greeting)=>{
        console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(anotherPerson.gereet("Hey")); // Output: Hey, my name is undefined and I am undefined years old.
  // In arrow functions, this does not refer to the object itself but inherits from the parent scope.
  //Here the this keyword points to the global object (or undefined in strict mode) because arrow functions do not have their own this context.

role="Novel"
let person = {
    firstName:"John",
    lastName:"Doe",
    title:()=> {
        return `${this.firstName} ${this.lastName} is a ${this.role}.`;
    }
};
console.log(person.title()); // Output: undefined undefined is a Novel.
// In the arrow function, this does not refer to the person object, resulting in undefined values for firstName and lastName. 
// We can see the role is accessed from the global scope and we can visually see that in the browser console not in node.js

//call method
let person3={
    name:"Alice",
    age:18,
    fun:function(anotherPerson){
        console.log(`My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old and my friend is ${anotherPerson}.`);
    }
}
person3.fun.call(person); // Output: My name is John Doe and I am 18 years old.
person3.fun.call(person,"Dinesh")// Output: My name is John Doe and I am 18 years old and my friend is Dinesh.

// In call method,the first argument is the value to be used as this when calling the function and the subsequent arguments are passed as individual arguments to the function.

//apply method
person3.fun.apply(person,["Suresh"]); // Output: My name is John Doe and I am 18 years old and my friend is Suresh.
// In apply method, the first argument is the value to be used as this when calling the function and the second argument is an array of arguments to be passed to the function.

//bind method
let boundFun=person3.fun.bind(person,"Ramesh");
boundFun(); // Output: My name is John Doe and I am 18 years old and my friend is Ramesh.
// In bind method, it creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// Bind method does not invoke the function immediately; instead, it returns a new function that can be called later.
