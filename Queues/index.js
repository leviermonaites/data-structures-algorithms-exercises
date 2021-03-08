import QueueInterface from "./QueueInterface.js";

class Queue extends QueueInterface {
  constructor(length) {
    super(length);
  }

  enqueue(element) {
    if (this.isFull) return "Queue already full!";
    this.elements[this.rear] = element;
    this.updateValues("enq");
    return this.elements;
  }

  dequeue() {
    this.elements[this.front] = null;
    this.updateValues("dq");
    return this.elements;
  }

  moveFront(to) {
    switch (to) {
      case this.totalLength:
        return 0;
      case -1:
        return this.totalLength - 1;
      default:
        return to;
    }
  }

  moveRear(to) {
    switch (to) {
      case this.totalLength:
        if (!this.elements[0]) return 0;
      case -1:
        return this.totalLength - 1;
      default:
        return to;
    }
  }

  updateValues(method) {
    switch (method) {
      case "enq": {
        this.rear = this.moveRear(this.rear + 1);
        break;
      }

      case "dq": {
        this.front = this.moveFront(this.front + 1);
        break;
      }
    }
    this.checkIfQueueIsFull();
    return;
  }

  checkIfQueueIsFull() {
    if (this.rear >= this.totalLength || this.elements[this.rear + 1]) {
      this.isFull = true;
    } else this.isFull = false;
  }
}

const createNewQueue = (length) => new Queue(length);

const queue1 = createNewQueue(5);
console.log(queue1.enqueue(5));
console.log(queue1.enqueue(6));
// console.log(queue1.enqueue(5));
// console.log(queue1.dequeue());
// console.log(queue1);
// console.log(queue1.enqueue(5));
