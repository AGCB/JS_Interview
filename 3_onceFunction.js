/* 
   WRITE A FUNCTION THAT CAN ONLY RUN ONCE
*/
let once = () => {
//even though we are redefining the once function on line 7, it wont affect 
//our first run. 
once = () => {return 'sorry'}
return 42;
}



console.log(once()) //returns 42
console.log(once()) //returns 'sorry'
console.log(once()) //returns 'sorry'

/* a different idea for line 7 is to just set once to undefined. 
   */

/* 
  The next idea would be returning an inner function that
  had a closure over the once() answer variable.
  
*/

function once(func) {
  let answer;
  return (x) => {
    if (answer === undefined) {
      answer = func(x)
    return answer;
    }
   else {return answer;}
  }
  
}
function addByTwo(x) { return x+2;}

let onceFunc = once(addByTwo);
// console.log(onceFunc(5));  //should log 5
// console.log(onceFunc(100));  //should log 5
// console.log(onceFunc(1002));  //should log 5
