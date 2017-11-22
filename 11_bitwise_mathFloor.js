/* 
  Explain Math.floor() and it's bitwise equivalants..
  
*/

// Math.floor() is a method on the Math object in JS transforms an input to the next lowest integer.
var a = 15.39
console.log(Math.floor(a)) //returns 15
a = 15.99
console.log(Math.floor(a)) //also returns 15.

// You can get the same result with a bitwise operation
// a << 0 is the fastest but there is also...
console.log(~~a) //also returns 15.
console.log(a | 0) //also returns 15.
console.log(a >> 0) //also returns 15.
console.log(a >>> 0) //also returns 15.

