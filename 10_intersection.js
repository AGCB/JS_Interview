/**
  Write a function that takes an array of 
*/
function intersection(...arrays) {
  return arrays.reduce((x,y)=>{
    return x.filter((z)=>{
           return y.indexOf(z) !== -1
                    })
  },arrays[0])
}

console.log(intersection([7, 20, 14, 19], 
                         [5, 301, 88, ,7,20, 7], 
                         [1, 10, 15, 7, 5, 20]
                         )); //should log [7,20]
