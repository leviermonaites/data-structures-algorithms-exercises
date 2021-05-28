import { createNewQueue } from "./Queue.js";

const queue1 = createNewQueue(5);
console.log(queue1.enqueue(5));
console.log(queue1.enqueue(6));
// console.log(queue1.enqueue(5));
// console.log(queue1.dequeue());
// console.log(queue1);
// console.log(queue1.enqueue(5));
