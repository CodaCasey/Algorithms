/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

 /*
 line 11 says n is a number rather than a list
 I-a number,n
 O- the Fibonacci number correlating to that
 C-none
 E-must use recursion

if its a recursive case the func(n-1) should be used but I need to add 0+1 as well
this would also need a base case for stoping so that it wont go infinitely
 */

 /* 0+1= 1...1+1=2...2+1=3...3+2=5 ...5+3=8...8+5=13...13+8=21 */

var nthFibonacci = function (n) {
  // less than 1 did not work?
  if(n<2){
    return n
  }
  return nthFibonacci(n-1) + nthFibonacci(n-2)
  // TODO: implement me!
};



