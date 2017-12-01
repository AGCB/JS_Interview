/* 
  Given a string, find the character that is repeated consecutively 
  the most # of times. 
  This is a question that was talked through by CSDojo
  
*/

let input = 'hnxbkueyghjjjjjjjhdskfjh';	
// your function should return {'j': 7} given this input

let longest = x => {
	let maxCount = 0
	let maxChar;
	let prevChar;
	let count = 0;
	let answer = {}
	
    
    x.split('').forEach((y)=> {
    	if (y === prevChar) {
    	count+=1;}
    	else {count = 1;}    		
    	
    	if (count > maxCount) {
    		maxCount = count;
    		
    		maxChar = y;
    	}
    	prevChar = y;

    })
  answer[maxChar] = maxCount

 return answer;


}
console.log(longest(input))
//should output {'j':7}
