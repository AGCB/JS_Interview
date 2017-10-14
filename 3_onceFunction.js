/* 
   WRITE A FUNCTION THAT CAN ONLY RUN ONCE
*/
let once = () => {
//even though we are redefining the once function on line 8, it wont affect 
//our first run. 
once = () => {return 'sorry'}
return 42;
}



console.log(once()) //returns 42
console.log(once()) //returns 'sorry'
console.log(once()) //returns 'sorry'
