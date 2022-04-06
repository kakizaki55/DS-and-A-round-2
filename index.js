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

class Queue {
  constructor() {
    this.arr = [];
  }
  //adds item
  enqueue(item) {
    return (this.arr = [...this.arr, item]);
  }
  //return the next item in line
  dequeue() {
    return this.arr.splice(0, 1);
  }
  //checks ti see if there is a next one
  hasNext() {
    return !!this.arr[0];
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue);
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null



onst word1 = 'superintended';
const word2 = 'unpredestined';
const word3 = 'pictorialness';
const word4 = 'documentarily';

function anagrams(wordOne, wordTwo) {
  const word1 = wordOne.split('').sort().join('');
  const word2 = wordTwo.split('').sort().join('');

  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
}

console.log(anagrams(word1, word2));
console.log(anagrams(word3, word4));
