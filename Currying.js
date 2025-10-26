Currying in JavaScript 

🔹 Definition:
        Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking one argument at a time.

🔹 Example:
// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

curriedAdd(1)(2)(3); // ➡️ 6

🔹 Benefits:

      1.Reusability (create specialized versions of functions)
      2.Function composition (easy chaining)
      3.Cleaner and more readable code
      4.Used in functional programming & libraries like Lodash, React, etc.

🔹 Example: 

      //Partial Function Reuse
      function multiply(a) {
        return function(b) {
          return a * b;
        };
      }
      
      const double = multiply(2);
      const triple = multiply(3);
      
      double(5); // ➡️ 10
      triple(5); // ➡️ 15
