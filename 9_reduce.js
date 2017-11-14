/** 
  CodeSmith JSHP problem. Implement your own forEach and reduce
*/
function forEach(array, callback) {
 for (var i = 0; i<array.length; i++) {
   callback(array[i]);
 } 
}
//Notice that the forEach doesn't return anything. It is used to 
//get other things done.

function reduce(array, callback, initialValue) {
  let accum = initialValue;
  forEach(array, (x)=> {
    	accum = x + accum;
  					});
  return accum;
}
var nums = [5, 2, 4];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0));   //-> 11
