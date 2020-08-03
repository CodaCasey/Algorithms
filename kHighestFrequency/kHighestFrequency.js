/*
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

    Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space
 */

/*
I- an array
O-k- the highest number of frequency with a copy array of repeated words
C- try to keep O( n log k), keep alphabetical order in mind
E- always asume K is valid and not uppercase
 */

//we have two plans nested for loop or to keep track with an object

// make a frequency variable
// make containter variable

// outer for loop
  //inner for loop
    //if arr[i] === arr[j]
      //frequency ++
      /// container push arr[i]

//call sort on container
//return frequency, container

var topKFrequent = function(words, k) {
  let container = {};
  for (e of words){
    if(!container[e]){
    container[e]=1;
  } else {
    container[e] +=1
  }
}
 let newArray= Object.entries(container)
 //console.log(newArray)
newArray.sort((a,b)=>{

   if(a[1] < b[1]){
     return 1
   } else if(a[1] > b[1] ) {
     return -1
   } else {
     if(a[0] > b[0]){
       return 1
     } else{
       return -1
     }
     return 0
   }

   })
let finalAnswer = newArray.splice(0, k)
let refinedAnswer = finalAnswer.map((word,idx)=>{
  return word[0]
})

return refinedAnswer
};

topKFrequent(["i", "love", "leetcode","a","a", "i", "love", "coding",'cat','cat','cat'],3)