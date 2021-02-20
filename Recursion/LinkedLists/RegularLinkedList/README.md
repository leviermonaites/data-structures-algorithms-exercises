#   HELPER

Hello there!
It's an explanation of the code, so if you have doubts, you should heavily consider read it.

Actually the code explain itself in most of the time, but I'll take one part alone and try to explain it.
It's a doubly linked list, so in order to be able to provide a better understanding for you, I really recommend you to read a little bit about Linked Lists,  here is a good link for beginners:

    -  https://www.youtube.com/watch?v=WwfhLC16bis

So, now that you have a good knowledge about it, let's get started.

Node class:
    - We have a class called Node, and the first thing we come across is a property called "lastCreated" that I'll explain later.
    - And then we have our constructor that receives a "data" parameter, to provide for the "data" property.
    - It can be any value, no restrictions, but maybe in a future I'll strict it to accept only numbers.
    - And then we have our "next" property that is the next node in the list, but how we can have a next if we are defining it as empty?
    - But keep calm, we're getting there!
    - Then we have our "if" statement, that is evaluating whether "Node.lastCreated" contains any value.
    - If the given node is the "root" or "head" it'll be undefined, because the property is empty in this moment.
    - So, let's follow our example with a "root" node and then we come back to explain the process with other nodes.
    - And then, passed the "if" statement, we define the value of lastCreated to be "this".
    - When we do that, the next node that is created will evaluate true to the first "if" statement, so let's talk about what'll happen.
    - The last node that we created will have its "next" property now defined as the current Node that we are creating.
    - And then, passed the "if" statement again, we define the "lastCreated" property to be "this", and the same will happen everytime we create a new Node!

countNodes method:

    - When this method is called, it soon creates a let called "count", and define it being 1 whether the given node - if it's really a node - contains data or 0 whether not.
    - By doing so, it helps us to return 0 at the end if the given parameter is not a Node, but look, it's just an exercise of a small scope, if it'd really large, I'd put a lot of requirements and conditionalities.
    - And then we have a "if" statement, that analyze if the given parameter have a "next" property.
    - If so, we define a let called "currentNode" with the primitive value being "head" (the given parameter).
    - And then we have our loved "do while" statement that could be just a "while" statement, but how it works?
    - As the first thing, we define our "currentNode" variable to be the "next" node, because the "if" statement assure us that it exists.
    - And then we add + 1 to that "count" variable that we define above, in the beginning of the method.
    - And we'll do the same thing until there's no way to go forwards, because we're got in the last node.

    A more practical example:
        - Node { data: 1, next: { Node { data: 2, next: { Node { data: 3, next: null } } } } }
    And now the "do while" will access the next of the first node and increment the let "count" by one:
        - Node { data: 2, next: { Node { data: 3, next: null } } }
        - count = 2
    And then, it'll back again and do the same thing, but now, accessing the third node.
        - Node { data: 3, next: null }
        - count = 3
    Now, it's finished because there's no way to go forwards.

It's that for today guys!
Hope you've understood, if you didn't, please tell me!