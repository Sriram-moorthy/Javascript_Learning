JavaScript Scoping — Complete Revision Sheet
📘 What Is Scope?

Scope defines where variables are accessible in your code.
In JavaScript, there are three main types of scope:
1.Global Scope
2.Function Scope
3.Block Scope

🌍 Global Scope
🔹 Definition: A variable is in the global scope if it’s declared outside any function or block, meaning it can be accessed from anywhere in the script.
Example:
        var globalVar = "I am global";
        let globalLet = "I am also global";
        const globalConst = "Me too!";
        
        function showGlobal() {
          console.log(globalVar);   // ✅ accessible
          console.log(globalLet);   // ✅ accessible
          console.log(globalConst); // ✅ accessible
        }
        showGlobal();
        
        console.log(globalVar);     // ✅ accessible
        console.log(globalLet);     // ✅ accessible
        console.log(globalConst);   // ✅ accessible

⚠️ In Browser Environment:
| Declaration | Added to `window` object? | Example                           |
| ----------- | ------------------------- | ----------------------------------|
| `var`       | ✅ Yes                    | `window.globalVar` → works       |
| `let`       | ❌ No                     | `window.globalLet` → undefined   |
| `const`     | ❌ No                     | `window.globalConst` → undefined |

🔹 var — Function Scoped

  Characteristics:

          1.Function-scoped, not block-scoped.
          2.Can be re-declared and updated.
          3.Hoisted and initialized as undefined.

  Example:
          function testVar() {
            if (true) {
              var x = 10;
            }
            console.log(x); // ✅ Works — var is function-scoped
          }
          testVar();
          
          console.log(x); // ❌ ReferenceError — x is not global


🔹 let — Block Scoped

  Characteristics:

          1.Block-scoped → accessible only inside {}.
          2.Can be updated, but not re-declared in the same scope.
          3.Hoisted, but not initialized (exists in Temporal Dead Zone)

  Example:
          function testLet() {
            if (true) {
              let y = 20;
              console.log(y); // ✅ Works
            }
            console.log(y); // ❌ ReferenceError — block-scoped
          }
          testLet();

⚠️ Temporal Dead Zone (TDZ):
console.log(b); // ❌ ReferenceError
let b = 10;


🔹 const — Block Scoped and Immutable

  Characteristics:

          1.Also block-scoped like let.
          2.Must be initialized at declaration.
          3.Cannot be re-assigned, but object properties can be changed.

  Example:
          const z = 30;
          z = 40; // ❌ TypeError — cannot reassign
          
          const obj = { name: "Sri Ram" };
          obj.name = "Moorthy"; // ✅ Allowed
          console.log(obj.name); // Moorthy


 Scope Visualization Diagram :
 
                                  🌍 Global Scope
                                  │
                                  ├── function example() {             ← Function Scope
                                  │     var x = 10;                   ← var → function-scoped
                                  │
                                  │     if (true) {                   ← Block Scope
                                  │         let y = 20;               ← let → block-scoped
                                  │         const z = 30;             ← const → block-scoped
                                  │         console.log(x, y, z);     ✅ Works (10, 20, 30)
                                  │     }
                                  │
                                  │     console.log(x);               ✅ Works (10)
                                  │     console.log(y);               ❌ Error
                                  │     console.log(z);               ❌ Error
                                  │ }
                                  │
                                  └── example();
                                  console.log(x);                     ❌ Error (function-scoped)



