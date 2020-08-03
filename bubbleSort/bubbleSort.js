/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

/*
if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.

 to solve this i need to iterate over the array so make a for loop
 ceate a placeholder variable to compare the elements
 if the first element is bigger than the second swap places
 place holder variables should increment

 //for loop
  // var first, second = arr[i] and arr[i+1];
  //if(first[i]> second[i])
    arr[i]=second
    arr[i+1]=first
    first and second increment
    continue loop

 */

var bubbleSort = function(array) {
  // Your code here.
  //first attempt didnt work going to try two arrays
  for( var i = 0; i < array.length; i++) {
    for(var j = 0; j< array.length; j++){
    var first=array[j];
    var second=array[j+1];
    //var prev;
    //var sec;
    if(first > second){
     array[j]=second;
     array[j+1]=first;
    }
  }
  }
  return array;
  //console.log(array)
  //^this passes the first requirment
  //Q: what is the time complexity?
  //A: it is quadratic and the bigger the array the longer it will take

  // how would i sort something without checking every element?
  //Binary maybe?
  // maybe i could check the first and last element then work my way inside that would make it log n
};
