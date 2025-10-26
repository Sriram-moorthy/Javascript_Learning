Self-Invoking Functions (IIFE):
Concept:

      1.Immediately Invoked Function Expression (IIFE) runs immediately after it’s defined.
      2.It helps create a private scope and avoid global variable pollution.

Syntax:

(function() {
  console.log("IIFE executed!");
})();


or ES6 arrow version:

(() => {
  console.log("Arrow IIFE executed!");
})();

Use Case:

Example: Private Scope / Initialization

    const counter = (function() {
      let count = 0; // private variable
      return {
        increment: () => ++count,
        decrement: () => --count,
        value: () => count
      };
    })();
    
    console.log(counter.increment()); // 1
    console.log(counter.value());     // 1


Why Use IIFE?

1.Prevents global namespace pollution.
2.Useful for module encapsulation before ES6 modules existed.
3.Often used for setup logic that should run once.
