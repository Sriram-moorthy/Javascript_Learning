JavaScript Functions:

        🔹Functions are the core building blocks of JavaScript.
        🔹They allow us to reuse code, organize logic, and control execution flow.

What Is a Function?

        🔹A function is a reusable block of code that performs a specific task.
        🔹You can call (or invoke) a function whenever you need it.

Syntax:
        function functionName(parameters) {
          // code to execute
          return result;
        }

1. Named Functions
   Definition:

      🔹A named function is a function that has a name (identifier).
      🔹It can be declared or called anywhere in its scope (because of hoisting).

   Example:
      function greet(name) {
        return "Hello, " + name + "!";
      }
      console.log(greet("Sri Ram")); // ✅ "Hello, Sri Ram!"

 Characteristics:

    🔹Declared using the function keyword.
    🔹Hoisted to the top of their scope.
    🔹Can be reused multiple times.
    🔹Can be recursive (a function calling itself).


2. Anonymous Functions
   Definition:

    🔹An anonymous function is a function without a name.
    🔹Usually assigned to a variable or used as a callback.

 Example:
      const add = function(a, b) {
        return a + b;
      };
      
      console.log(add(5, 10)); // ✅ 15

Example (Used as a callback):
      setTimeout(function() {
        console.log("Executed after 2 seconds");
      }, 2000);

Characteristics:

   🔹No name → can’t be called by its identifier (only via the variable it’s stored in).
   🔹Not hoisted → must be defined before use.
   🔹Useful for short, one-time functions or callbacks.

  
3. Arrow Functions (ES6+)
   Definition:

   🔹An arrow function is a shorter way to write functions introduced in ES6.
   🔹It provides a concise syntax and automatically binds the this keyword lexically (from the surrounding context).

Basic Syntax:
    const functionName = (parameters) => expression;

🔹If the function has one expression, the return keyword and {} can be omitted.

Example:
    const multiply = (x, y) => x * y;
    console.log(multiply(4, 5)); // ✅ 20

Example (Multiple statements):

    const greet = (name) => {
      console.log("Hello, " + name);
      return "Welcome!";
    };
    
    console.log(greet("Moorthy"));
