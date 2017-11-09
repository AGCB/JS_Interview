/* WRITE A FUNCTION THAT TAKES A COUNT AND A CALLBACK AS ARGUMENTS.
  ONCE YOUR FUNCTION HAS BEEN RUN 'COUNT' NUMBER OF TIMES, THE CALLBACK
  MAY RUN AND RETURN THE RESULT.
  UNTIL THAT COUNT HAS BEEN REACHED, YOUR FUNCTION WILL RETURN UNDEFINED
  
  THIS IS A FUN PROBLEM THAT GETS BROUGHT UP DURING JAVASCRIPT THE HARD PARTS,
  A CODE MEETUP IN LOS ANGELES AT CODESMITH
*/

function after(count, func) {
  let funcount = 0;
  let sorry = () => {
    console.log(undefined);
    return;
  }
  return () => {
    funcount++
    if (funcount >= count) {
      funcount = 0;
      return func();}
    else { return sorry();}
}
}
var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> undefined is printed
afterCalled(); // -> undefined is printed
afterCalled(); // -> 'hello' is printed
afterCalled(); // -> undefined is printed
afterCalled(); // -> undefined is printed
afterCalled(); // -> 'hello' is printed
