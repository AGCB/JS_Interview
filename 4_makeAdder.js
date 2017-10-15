/*
  WRITE A MAKEADDER FUNCTION. THEN MAKE A 10ADDER AND A 20ADDER 
*/


let makeAdder = (x) => {
	return (y) => {
	  return x+y;
	}
}

let addTen = makeAdder(10) //it's expected that 10 replaces x, but it's quite a headFlip
						   //that when we call addTen(), any parameter will
						   //become y!
let addTwenty = makeAdder(20);



console.log('should return 19--' + addTen(9) )
console.log('should return 29--' + addTwenty(9) )
console.log('should return 30--' + addTwenty(10) )


/* 
  I first saw this type of example in Kyle Simpson's YDKJS series.
*/
