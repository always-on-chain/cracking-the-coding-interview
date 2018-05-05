//3.2 Stack Min: How would you design a stack which, in addition to push and pop,
  //has a function min which returns the minimum element? Push, pop, and min should
  //all operate in O(1) time.

class Stack {
  constructor() {
    this.items = [];
    this.minValue = Number.POSITIVE_INFINITY;
    this.minStack = null;
  }
  
  push(value) {
    this.items.push(value);
    if (value < this.minValue) {
      this.minValue = value;
      console.log('minValue', this.minValue, 'greaterOrless', value < this.minValue)
      if (this.minStack === null) {
        this.minStack = new StackMin();
      }
      this.minStack.push(value);
      console.log(this.minStack.minItems)
    }
  }

  pop() {
    if (this.items[this.items.length - 1] === this.minValue) {
      this.minStack.pop();
      this.minValue = this.minStack.minItems[this.minStack.minItems.length - 1];
    }
    return this.items.pop();
  }

  min() {
    return this.minValue;
  }
}

class StackMin {
  constructor () {
    this.minItems = [];
  }

  push(value) {
    this.minItems.push(value);
  }

  pop() {
    return this.minItems.pop();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(0);
stack.min();