/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

 /*
 I-array, target
 O- index of target if it exist
 C- none
 E-array is already sorted so no constrains, if target does not exist return null
 */
/*
//var start and var stop
create a middle variable that will be a Math.floor of the array index / 2 or start+stop/2
array will continue to half as it searches for the target
diving into left and right side based on the value of the target and middle val
could use a while loop to continue searching
*/
var binarySearch = function (array, target) {

  var start = 0
  var stop = array.length-1;
  //m is the middle variable
while (start<=stop){
  var m= Math.floor((start + stop)/2 );
  if(target === array[m]){
    return m
  }
  if(target > array[m]){
    start=m+1
  }
  if(target<array[m]){
    stop=m-1
  }
}
return null //if it cannot find the target null is returned

};

