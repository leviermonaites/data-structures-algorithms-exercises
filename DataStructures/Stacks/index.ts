import { createStack } from "./Stack.js";

const stack = createStack(5);

stack.push(6);
stack.push(89);
stack.push(89);
stack.push(89);
stack.push(89);
console.log(stack.push(89));
console.log(stack.toString());
console.log(stack.toArray());
