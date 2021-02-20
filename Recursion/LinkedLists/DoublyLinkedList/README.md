#   HELPER

Hello there!
It's an explanation of the code, so if you have doubts, you should heavily consider read it.

Actually the code explain itself in most of the time, but I'll take one part alone and try to explain it.
This code is just an addition for the "RegularLinkedList" code, so you should heavily consider try it first.

As this code is just an addition, I'll talk just about somethings here and there:

Node class:

    - As we have in the "RegularLinkedList" code, it follows the same reasoning, but with the difference that there's a property called "prev" here.
    - This property will be equals to the node stored in the property "lastCreated". (It'll be null if the given node is the root).

goBackwards method:
    - As we've done with "next" property in the "RegularLinkedList" code, we can also do the same for the "prev" property, access the node by doing "node.prev".
    So this method doesn't do any special stuff, we just access the previous node.
    A practical example:
        - Node { data: 2, prev: { Node { data: 1, prev: null, next: (the current node) } }, next: null }
        Now, when we access the previous node, here what it'll return.
        - Node { data: 1, prev: null, next: (that node, that we were in just a few moments ago) }

It's that for today guys!
Hope you've understood, if you didn't, please tell me!

