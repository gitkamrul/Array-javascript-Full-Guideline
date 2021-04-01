

var arr = [1,2,3,4,5,6,7,8,9];
var sum = 0;

// Simple Travers Array
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);     // Output: 1 2 3 4 5 6 7 8 9
   
}


// Addition Traverse Array 
for (let i = 0; i < arr.length; i++) {
  sum+=arr[i]
}
console.log(sum);     //Output: 45;



// Get 0large Number   in a Array 
let largeNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
   if(arr[i] >largeNumber){
      largeNumber = arr[i];
   }
      
}
console.log(largeNumber);        // output: 9;

//3.Array-Treverse.js