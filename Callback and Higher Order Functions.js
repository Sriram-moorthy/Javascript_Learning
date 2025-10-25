JavaScript Higher-Order & Callback Functions

Functions in JavaScript are first-class citizens, meaning they can be:

                  1.Assigned to variables
                  2.Passed as arguments
                  3.Returned from other functions


 1. Callback Functions
   Definition:

          🔹A callback function is a function passed as an argument to another function, and it is executed later inside that function.
          🔹Callbacks are commonly used in asynchronous operations, like timers, event listeners, or API calls.

Example 1: 
          function greet(name, callback) {
            console.log("Hello, " + name);
            callback();
          }
          
          function sayBye() {
            console.log("Goodbye!");
          }
          
          greet("Sri Ram", sayBye);
          
          
          Output:
          
          Hello, Sri Ram
          Goodbye!              [🔹sayBye is passed as a callback and executed inside greet().]



⚠️ Callback Hell:

When multiple callbacks are nested, code becomes difficult to read and maintain.

        getData(() => {
          processData(() => {
            saveData(() => {
              console.log("Done!");
            });
          });
        });

🔹Use Promises or async/await to avoid this pattern.


 2. Higher-Order Functions (HOFs)
    Definition:

          🔹A higher-order function is a function that takes another function as an argument OR returns a function as its result.
          🔹These make JavaScript more functional and modular.

 Example 1:
          function calculate(a, b, operation) {
            return operation(a, b);
          }
          
          function add(x, y) {
            return x + y;
          }
          
          function multiply(x, y) {
            return x * y;
          }
          
          console.log(calculate(5, 3, add));      // ✅ 8
          console.log(calculate(5, 3, multiply)); // ✅ 15


 Example 2: 
       🔹HOF Returning Another Function
        function greet(message) {
          return function(name) {
            return message + ", " + name + "!";
          };
        }
        
        const sayHello = greet("Hello");
        console.log(sayHello("Moorthy")); // ✅ "Hello, Moorthy!"
