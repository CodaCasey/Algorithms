/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
*/

// made use of pointers / putting pointers to practice

var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length-1;

  while (i < j){
      let sum = numbers[i] + numbers[j]

      if(sum === target){
          return [i+1,j+1]
      }else if(sum > target){
          j --;
      }else if(sum < target){
          i++;
      }
  }
};