class QueueInterface {
  constructor(length) {
    this._elements = new Array(length + 1);
    this._front = 0;
    this._rear = 0;
    this._isFull = false;
    this._totalLength = length;
  }

  get elements() {
    return this._elements;
  }
  set elements(v) {
    this._elements = v;
  }
  get front() {
    return this._front;
  }
  set front(v) {
    this._front = v;
    console.log(this._front);
  }
  get rear() {
    return this._rear;
  }
  set rear(v) {
    this._rear = v;
  }
  get isFull() {
    return this._isFull;
  }
  set isFull(v) {
    this._isFull = v;
  }
  get totalLength() {
    return this._totalLength;
  }
  set totalLength(v) {
    this._totalLength = v;
  }

  enqueue(element) {
    throw new Error("Method must be implemented");
  }

  dequeue() {
    throw new Error("Method must be implemented");
  }

  moveFront(to) {
    throw new Error("Method must be implemented");
  }

  moveRear(to) {
    throw new Error("Method must be implemented");
  }

  updateValues(method) {
    throw new Error("Method must be implemented");
  }

  checkIfQueueIsFull() {
    throw new Error("Method must be implemented");
  }
}

export default QueueInterface;
