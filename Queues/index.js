class Queue {
  constructor(length) {
    this.elements = new Array(length + 1);
    this.front = -1;
    this.rear = 0;
    this.isFull = false;
    this.totalLength = length;
    this.freeSpaces = new Array(length);
    this.freeSpacesRear = 0;
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
        return 0;
      case -1:
        return this.totalLength - 1;
      default:
        return to;
    }
  }

  updateValues(method) {
    switch (method) {
      case "enq": {
        this.pointingAt = this.moveFront(this.front + 1);
        this.freeSpace = this.moveRear(this.rear + 1);
        break;
      }

      case "dq": {
        this.freeSpaces[this.freeSpacesRear] = this.moveFront;
        this.freeSpacesRear++;
        this.front = this.moveFront(this.front + 1);
      }
    }
    this.checkIfQueueIsFull();
    return;
  }

  checkIfQueueIsFull() {
    if (this.rear === this.totalLength) {
      if (this.elements[0]) this.isFull = true;
      else this.isFull = false;
    }
  }
}

const createNewQueue = (length) => new Queue(length);

const queue1 = createNewQueue(5);
queue1.enqueue(5);
queue1.enqueue(5);
queue1.enqueue(5);
queue1.enqueue(5);
queue1.enqueue(5);
queue1.enqueue(5);
console.log(queue1.enqueue(5));
// console.log(queue1.dequeue());
// console.log(queue1);
// console.log(queue1.enqueue(5));
