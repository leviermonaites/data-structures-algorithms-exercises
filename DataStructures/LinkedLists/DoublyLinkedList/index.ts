import LinkedList from "../interface/LinkedList.ts";
import DoublyNode from "./DoublyNode.ts";

class DoublyLinkedList implements LinkedList {
  head: DoublyNode | null = null;
  tail: DoublyNode | null = null;
  length = 0;

  private addWhenEmpty(node: DoublyNode) {
    this.head = node;
    this.tail = node;
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.length++;
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
    this.length = 0;
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

  isEmpty() { return this.length === 0 }

  pop() {
    if (!this.isEmpty()) {
      const tempTail = this.tail;
      if (this.length - 1 === 0) {
        const tempHead = this.head;
        this.head = this.tail = null;
        return tempHead || undefined;
      }

      if (this.length - 1 === 1) {
        this.tail = this.head;
        if (this.head) this.head.next = this.tail;
        if (this.tail) this.tail.prev = this.head;
        return tempTail || undefined;
      }

      if (this.tail) this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      this.length--;

      return tempTail || undefined;
    }
  }

  push(data: unknown) {
    const node = new DoublyNode(data);
    if (this.isEmpty()) return this.addWhenEmpty(node);
    if (this.tail) this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return node;
  }

  remove(data: unknown) {
    if (!this.isEmpty()) {
      if (this.head && this.head.data === data) return this.shift();
      if (this.tail && this.tail.data === data) return this.pop();

      const trav = this.search(data);
      if (trav) {
        const node = trav;
        if (trav.prev) trav.prev.next = trav.next;
        if (trav.next) trav.next.prev = trav.prev;
        return node;
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
    if (!this.isEmpty()) {
      if (this.length - 1 === 0) {
        const tempHead = this.head;
        this.head = this.tail = null;
        this.length--;
        return tempHead || undefined;
      }

      if (this.length - 1 === 1) {
        const tempHead = this.head;
        this.head = this.tail;
        if (this.tail) this.tail.prev = null;
        this.length--;
        return tempHead || undefined;
      }

      const tempHead = this.head;
      if (this.head) this.head = this.head.next;
      if (this.head) this.head.prev = null;

      this.length--;
      return tempHead || undefined;
    }
  }

  toArray() {
    const arr = new Array(this.length);
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
    this.length++;
    return node;
  }
}

export default DoublyLinkedList;
