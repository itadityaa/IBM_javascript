// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
  // Block scope
  var blockVar = "I'm a block-scoped var";
  blockVar = "I can be reassigned in the same block scope";
  let blockLet = "I'm a block-scoped let";
  blockLet = "I can be reassigned in the same block scope";
  const blockConst = "I'm a block-scoped const";
  // blockConst = "I cannot be reassigned in the same block scope"; // TypeError: Assignment to constant variable.
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);
/*You will see output for blockVar, because it can be accessed outside the curly brackets {}. But you will see ReferenceError for blockLet because it cannot be accessed outside the curly brackets due to which it is known as block scoped variables. Such variables can only be accessed within curly brackets. You will see the same error for const as well.*/
// console.log(blockConst);
// ReferenceError: blockLet is not defined

function show() {
  var functionVar = "I'm a block-scoped var";
  let functionLet = "I'm a block-scoped let";
  const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
