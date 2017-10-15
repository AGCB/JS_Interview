/* 
  WRITE A FUNCTION THAT TAKES A NUMBER AS INPUT.(USE ARGUMENT NAME X)
  THE FUNCTION CAN ONLY RUN X TIMES. ANY MORE, AND IT WILL RETURN 'SORRY'
  UNTIL THEN IT WILL RETURN 'allowed'
*/
var xNumberOfTimesRunning = function(x) {
    var counter = 0;
    return function() { 
    	counter++;
     	if(counter <=x) {return 'allowed'}
     	else {return 'sorry no more'}	
     };
};
var twice = xNumberOfTimesRunning(2);
console.log(twice());
console.log(twice());
console.log(twice());
console.log(twice());


