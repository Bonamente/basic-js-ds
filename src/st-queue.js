const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
    
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const removedItemValue = this.first.value;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size -= 1;

    return removedItemValue;
  }
}
