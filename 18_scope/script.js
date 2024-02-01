//Global scope: The default scope for all code running in script mode.

// let a = 10;
// const b =  20;
// var c  = 30;

// console.log(a);
// console.log(b);
// console.log(c);

let a = 123;  //this is print bcz it is in the global scope

if (true) {
    
let a = 10;
const b =  20;
var c  = 30;

}

//{}this is the block scope let and const follow this var is not useful in javascript  

console.log(a);

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// Example

// {
//   let x = 2;
// }

//x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.

// Example

// {
//   var x = 2;
// }

// x CAN be used here