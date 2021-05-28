import DoublyNode from "./DoublyNode.ts";

class DoublyLinkedList implements DataStructure {
  elements: { head: DoublyNode | null; tail: DoublyNode | null } = {
    head: null,
    tail: null,
  };
  private size = 0;

  // DataStructure interface methods...

  add(data: unknown, where = "head") {
    const node = new DoublyNode(data);
    if (this.isEmpty()) {
      this.elements.head = node;
      this.elements.tail = node;
    } else {
      if (where === "tail") this.addLast(node);
      else this.addFirst(node);
    }
    this.size++;
    return true;
  }

  remove(data: unknown) {
    if (!this.isEmpty()) {
      if (this.elements.head && data === this.elements.head.data)
        return this.removeFirst();
      if (this.elements.tail && data === this.elements.tail.data)
        return this.removeLast();

      const node = this.searchNode(data);
      if (node) {
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        this.size--;
        return true;
      }
    }
    return false;
  }

  contains(data: unknown) {
    let trav = this.elements.head;
    while (trav) {
      if (data === trav.data) return true;
      trav = trav.next;
    }
    return false;
  }

  clear() {
    let node = this.elements.head;
    if (node) {
      while (node) {
        if (node.prev) {
          node.prev.next = null;
          node.prev = null;
        }
        node = node.next;
      }
      this.elements.head = this.elements.tail = node;
    }
    this.size = 0;
    return true;
  }

  toArray() {
    const arr = new Array(this.size);
    let node = this.elements.head;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = node ? node.data : null;
      node = node ? node.next : null;
    }
    return arr;
  }

  toString() {
    let sb = "[";
    for (let node = this.elements.head; node; node = node.next) {
      if (node.next) sb = sb.concat(`${node.data},`);
      else sb = sb.concat(`${node.data}`);
    }
    sb = sb.concat("]");
    return sb;
  }

  // Other DoublyLinkedList methods...

  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }

  private addLast(node: DoublyNode) {
    if (this.elements.tail) this.elements.tail.next = node;
    node.prev = this.elements.tail;
    this.elements.tail = node;
  }

  private addFirst(node: DoublyNode) {
    if (this.elements.head) this.elements.head.prev = node;
    node.next = this.elements.head;
    this.elements.head = node;
  }

  removeFirst() {
    if (!this.isEmpty()) {
      if (this.elements.head && this.elements.head.next) {
        this.elements.head = this.elements.head.next;
        this.elements.head.prev = null;
      } else {
        this.elements.head = null; // If head hasn't any prev, it means that it was the only Node assigned to the Linked List.
        this.elements.tail = null;
      }
      this.size--;
      return true;
    }
    return false;
  }
  removeLast() {
    if (!this.isEmpty()) {
      if (this.elements.tail && this.elements.tail.prev) {
        this.elements.tail = this.elements.tail.prev;
        this.elements.tail.next = null;
      } else {
        this.elements.head = null; // If tail hasn't any prev, it means that it was the only Node assigned to the Linked List.
        this.elements.tail = null;
      }
      this.size--;
      return true;
    }
    return false;
  }

  private searchNode(data: unknown) {
    let trav = this.elements.head;
    while (trav) {
      if (data === trav.data) return trav;
      trav = trav.next;
    }
    return false;
  }
}

// const dbLinList = new DoublyLinkedList();
// const a = "i";
// const b = "b";
// const c = "c";
// const d = "d";
// const e = "e";
// const f = "f";
// const g = "g";
// const h = "h";
// const i = "i";

// dbLinList.add(a);
// dbLinList.add(b);
// dbLinList.add(c);
// dbLinList.add(d);
// dbLinList.add(e);
// dbLinList.add(f);
// dbLinList.add(g);
// dbLinList.add(h);

// dbLinList.contains(h);
// dbLinList.contains(i);
// dbLinList.clear();
// console.log(dbLinList.toString());

export default DoublyLinkedList;
