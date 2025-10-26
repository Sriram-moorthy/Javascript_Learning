Concept:
      A closure is a function that “remembers” its outer scope even after the outer function has finished executing.

Example:

      function outerFunction() {
        let counter = 0;
      
        function innerFunction() {
          counter++;
          return counter;
        }
      
        return innerFunction;
      }
      
      const increment = outerFunction();
      console.log(increment()); // 1
      console.log(increment()); // 2


Here, innerFunction keeps access to counter even after outerFunction returns — that’s the closure.
