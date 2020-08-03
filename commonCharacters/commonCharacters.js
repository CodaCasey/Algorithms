/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

/*
i-two strings
o-a string containing matching charecters
c-no repeeated charecters
e-none

*/

var commonCharacters = function(string1, string2) {
  //make an empty string to incrememnt
  let emptyString='';
  //make 2 for loops
  for(var i=0; i < string1.length; i++){
    //the outer loop will be the first string
    for(var j=0; j < string2.length; j++){
      //in the inner loop it will check every elment to see if it matches string1[0]
      if(string1[i] === string2[j]) {
        emptyString +=string1[i]
      }
    }
  }
  return String.prototype.concat(...new Set(emptyString))
  /*

  in the inner loop it will check every elment to see if it matches string1[0]
  if there is a match and that charecter doesnt exist in empty string then += that charecter   // migth be able to use set or unique aswell

  return that empty string
  */
  // TODO: Your code here!
};
