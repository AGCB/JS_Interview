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
