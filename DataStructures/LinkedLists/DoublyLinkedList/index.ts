import LinkedList from "../interface/LinkedList";
import DoublyNode from "./DoublyNode";

class DoublyLinkedList implements LinkedList {
  head: DoublyNode | null | undefined;
  tail: DoublyNode | null | undefined;
  private size = 0;

  get length() { return this.size; }

  private addWhenEmpty(node: DoublyNode) {
    this.head = node;
    this.tail = node;
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.size++;
    return node;
  }

  clear() {
    let node = this.head;
    if (node) {
      while (node) {
        if (node.prev) {
          node.prev.next = null;
          node.prev = null;
        }
        node = node.next;
      }
      this.head = this.tail = node;
    }
    this.size = 0;
    return true;
  }

  contains(data: unknown) {
    let trav = this.head;
    while (trav) {
      if (trav.data === data) return true;
      else trav = trav.next;
    }
    return false;
  }

  isEmpty() { return this.size === 0 }

  pop() {
    if (!this.isEmpty()) {
      let returnVal: unknown = 0;
      const tempTail = this.tail;

      if (this.size - 1 === 0) {
        const tempHead = this.head;
        this.head = this.tail = null;
        returnVal = tempHead?.data;
      } else if (this.size - 1 === 1) {
        this.tail = this.head;
        if (this.head) this.head.next = this.tail;
        if (this.tail) this.tail.prev = this.head;
        returnVal = tempTail?.data;
      } else {
        if (this.tail) this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
      }
      
      this.size--;
      return returnVal;
    }
  }

  push(data: unknown) {
    const node = new DoublyNode(data);
    if (this.isEmpty()) return this.addWhenEmpty(node);
    if (this.tail) this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.size++;
    return node;
  }

  remove(data: unknown) {
    if (!this.isEmpty()) {
      if (this.head?.data === data) return this.shift();
      if (this.tail?.data === data) return this.pop();

      const trav = this.search(data);
      if (trav) {
        const node = trav;
        if (trav.prev) trav.prev.next = trav.next;
        if (trav.next) trav.next.prev = trav.prev;
        this.size--;
        return node.data;
      }
    }
  }

  reverse() {
    let trav = this.head;
    const newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;

    while (trav) {
      const tempTravNext = trav.next;
      trav.next = trav.prev;
      trav.prev = tempTravNext;
      trav = trav.next;
    }
    return true;
  }

  search(data: unknown) {
    let trav = this.head;
    while (trav) {
      if (trav.data === data) return trav;
      else trav = trav.next;
    }
  }

  shift() {
    const tempHead = this.head;
    if (!this.isEmpty()) {
      if (this.size - 1 === 0) {
        this.head = this.tail = null;
      } else if (this.size - 1 === 1) {
        this.head = this.tail;
        if(this.tail) this.tail.prev = null;
      }

      else {
        this.head = this.head?.next;
        if (this.head) this.head.prev = null;
      }
      this.size--;
      return tempHead?.data;
    }
  }

  toArray() {
    const arr = new Array(this.size);
    let node = this.head;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = node ? node.data : null;
      node = node ? node.next : null;
    }
    return arr;
  }

  toString() {
    let sb = "[";
    for (let node = this.head; node; node = node.next) {
      if (node.next) sb = sb.concat(`${node.data},`);
      else sb = sb.concat(`${node.data}`);
    }
    sb = sb.concat("]");
    return sb;
  }

  unshift(data: unknown) {
    const node = new DoublyNode(data);
    if (this.isEmpty()) return this.addWhenEmpty(node);
    if (this.head) this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.size++;
    return node;
  }
}

export default DoublyLinkedList;
