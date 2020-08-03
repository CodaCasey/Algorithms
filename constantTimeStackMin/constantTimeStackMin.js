/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */

  /*
  having an array is not constant at worse case so make a second stack
  create similar variables one for big stack size and one for small stack size
  storage is an empty object that only takes small values from big stack
  if big stack number is smaller than current small stack number then thats the new min
  */
  var Stack = function() {
  this.size = 0;
  this.minSize=0;
  this.container={};
  this.smolContainer={};
   // var min; this idea wont work if you pop from the stack

  }

  // add an item to the top of the stack
    Stack.prototype.push = function(value) {
      this.container[this.size]=value;
      if(this.minSize < 1){
        this.smolContainer[this.minSize]=value
        }
      //should increment size when each value is added
      this.size++;
      this.minSize++;
      //add to small stack

      if(value < this.smolContainer[this.minSize]){
        this.smolContainer[this.minSize]=value;
        this.minSize++
      }

    };

  // remove an item from the top of the stack
  Stack.prototype.pop = function() {
    //needs to keep track of popped item
    var popped=this.container[this.count-1];
    //return popped item
    delete this.container[this.count-1];
    //should decriment size on each pop
    size--;
    if(popped === this.smolContainer[this.minSize]){
      delete this.smolContainer[this.minSize]
    }
    };

  // return the number of items in the stack
  Stack.prototype.size = function() {
      return this.count;
    };

  // return the minimum value in the stack
  Stack.prototype.min = function() {
    return this.smolContainer[this.minSize]
    };



