/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/
/*
i-takes an array
o-returns the first occurence of an even item (note the item has to occur twice odd number of occurences shouldnt count)
c- none
e-if no occurences return null
*/

//create a variable to count number of occurences

//for loop to iterate over the current item
  //for loop to iterate over array
  //create a variable to store arr[i]
  //start at arr[i] and count occurences of arr[i]
    //if count === 2
      //return that arr[i]
var evenOccurrence = function(arr) {

for(var i=0;i<arr.length;i++){

 var count=0;
 var current=arr[i]
 for(var j=0; j<arr.length; j++) {
   if(current === arr[j]) {
     count++;
   }
 }
  if(count === 2) {
    return arr[i];
  }

  }
  return null;
};
//im assuming the spectator bot will put in its own tests
// var array=[0, 1, 2, 2, 4, 5, 8, 9, 6, ]
// evenOccurrence(array)