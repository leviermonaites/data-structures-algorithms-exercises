import SinglyNode from "./SinglyNode.ts";

class SinglyLinkedList {
  head: SinglyNode | null = null;
  tail: SinglyNode | null = null;
  length = 0;

  get(index: number) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node) node = node.next;
      else return undefined;
    }
    return node;
  }

  set(data: unknown, index: number) {
    const node = this.get(index);
    if (!node) return undefined;
    node.data = data;
    return true;
  }

  push(data: unknown) {
    const node = new SinglyNode(data);
    if (!this.head) this.head = node; // If there's not an object at top, it means that it's the first node.
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;
    return true;
  }

  unshift(data: unknown) {
    const node = new SinglyNode(data);
    node.next = this.head;
    this.head = node;
    return true;
  }

  insert(data: unknown, index: number) {
    if (index < 0) return undefined;
    const node = new SinglyNode(data);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else if (index === this.length - 1) this.push(data);
    else {
      const prevNode = this.get(index - 1);
      if (!prevNode) return undefined;
      node.next = prevNode.next;
      prevNode.next = node;
    }
    this.length++;
    return true;
  }

  shift() {
    if (!(this.length > 2)) this.clear();
    if (this.head) this.head = this.head.next;
    return true;
  }

  remove(index: number) {
    if (!this.head || index < 0 || index > this.length) return undefined;
    if (index === 0) this.shift();
    const prevNode = this.get(index - 1);
    if (prevNode) prevNode.next = prevNode.next ? prevNode.next.next : null;
    this.length--;
    return true;
  }

  findAndRemove(node: SinglyNode) {
    if (this.head === node) {
      this.head = this.head.next;
      return true;
    }

    let trav = this.head;
    let trav2 = trav ? trav.next : null;

    if (trav2) {
      do {
        if (trav2 === node) {
          if (trav) trav.next = trav2.next;
          this.length--;
          return true;
        }

        if (trav2.next) {
          trav = trav2;
          trav2 = trav2.next;
        } else break;
      } while (true);
    }

    return undefined;
  }

  clear() {
    let node = this.head;
    while (node) {
      // Node.next may be null
      let removable = node.next; // The name removable was chosen because of this particular line and not the below one.

      if (removable) removable = removable.next; // Removable will be another node or a null after this line.

      node.next = null;

      node = removable; // It may be null from now, if it is, the wile statement ends up, and we just clean the head in the below statement.
    }
    this.head = null;
    this.length = 0;
    return true;
  }

  reverse() {
    const tempHead = this.head;

    let trav = this.head;
    let trav2 = this.head ? this.head.next : null;

    while (trav2) {
      const tempNextTrav2 = trav2.next;
      trav2.next = trav;
      trav = trav2;
      if (tempNextTrav2) trav2 = tempNextTrav2;
      else {
        this.head = trav2;
        break;
      }
    }

    this.tail = tempHead;
    if (this.tail) this.tail.next = null;
    return true;
  }
}

const linkedList = new SinglyLinkedList();
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = "e";
const f = "f";

linkedList.push(a);
linkedList.push(b);
linkedList.push(c);
linkedList.push(d);
linkedList.push(e);
linkedList.push(f);

// linkedList.insert(d, 1);

linkedList.reverse();
console.log(linkedList.get(5));

// console.log(linkedList.remove(d));
// console.log(linkedList.clear());
console.log(linkedList);

export default SinglyLinkedList;
