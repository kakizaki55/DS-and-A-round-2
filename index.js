// Stack
class Stack {
  constructor() {
    this.arr = [];
  }

  push(item) {
    return this.arr.push(item);
  }

  pop() {
    return this.arr.pop();
  }
  peek() {
    const peekItem = this.arr.slice(this.arr.length - 1);
    return peekItem[0];
  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null
