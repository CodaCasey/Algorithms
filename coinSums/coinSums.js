/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/
/*
I-a number that im asuming represents pence (so 200= 2pounds or 200 pence)
O-combinations totaling the input (how many ways)
C-none
E-
*/
/*
var count =, var placeholder, var array of coins

you may not need a placeholder but after every tree iteration count ++

make a helper function to recurse

as the tree traverses it should subtract from the total

may need an acumulation variable to subtract from

while accumulation >0 continue to recurse

count++ until tree is traversed
*/
var makeChange = function(total) {
var count=0;
var sum=total;
var coins=[1,2,5,10,20,50,100,200];

var helper=function(aNum){

  for (var i = 0; i < coins.length; i++){
    if(sum === 0){
      return count
    }else{
      sum - coins[i];
      count++;
    }
  }
}
helper(sum)
return count;
};

