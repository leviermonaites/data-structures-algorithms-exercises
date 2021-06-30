import SinglyNode from "./SinglyNode.ts";

class SinglyLinkedList  {
  head: SinglyNode | null = null;
  tail: SinglyNode | null = null;

  add(data: unknown) {
    const node = new SinglyNode(data);
    if (!this.head) this.head = node; // If there's not an object at top, it means that it's the first node.
    if(this.tail) this.tail.next = node;
    this.tail = node;
    return true;
  }

  remove(node: SinglyNode) {
    if (!this.head) return false;
    if (this.head === node) {
      this.head = this.head.next;
      return true;
    }

    let trav = this.head;
    let trav2 = trav.next;

    if (trav2) {
      do {
        if (trav2 === node) {
          trav.next = trav2.next;
          return true;
        }

        if (trav2.next) {
          trav = trav2;
          trav2 = trav2.next;
        } else break;
      } while (true);
    }

    return false;
  }

  get(index: number) {
    let node = this.head;
    for(let i = 0; i < index; i++) {
      if(node) node = node.next;
      else return undefined;
    }
    return node;
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

linkedList.add(a);
linkedList.add(b);
linkedList.add(c);
linkedList.add(d);
linkedList.add(e);
linkedList.add(f);

// console.log(linkedList.remove(d)); // Expected output: "Removed successfully!";
// console.log(linkedList.clear());
console.log(linkedList);

export default SinglyLinkedList;
