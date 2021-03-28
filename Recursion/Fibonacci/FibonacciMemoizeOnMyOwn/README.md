#   HELPER

Hello there!
This file is an explanation of the code, so if you have doubts about it, you should read it!

First, in order to have a better and easier understanding of the code, you should know what the fibonacci sequence is, and then, you get back to the code, so, in order to help you, here a good link to learn more about it:

    - https://www.mathsisfun.com/numbers/fibonacci-sequence.html

Now, that you have a good knowledge about it, let's follow to the code!

We used here an opmitization technique called memoization.
It helps us with recursive functions, specially when it's called a lot of times.
But, as I explain about the fib function, I'll enter in more details about it too.
So, let's talk about the fib function.
OBS: Its purpose is to return the last index of it, and not the total array, okay?

How it works:
    - n parameter = the last index of the sequence length you wanna see.
    - The function is called, and it soon get in front of it a "if" statement, that is checking if the value that we desire to know is already into the array, it'll be easier to understand later.
    - Then it creates a let called result, that we'll change its value, depending on the rest of the code.
    - Then, we have another if statement, this one will check if n equals to 1 or 2, if so, the default value for it is 1
    - If it is not, we have an else statement where will return the value returned from the call of the function itself with the n paramater minus one plus the call of itself with the n parameter minus 2.
    - It may be a little bit confusing, but I'll let an example at the end in order to provide a better explanation.
    - Then, we'll store the value of result - result will be 1 or the result returned from the else statement - and then just return the result.

Now, a little bit of that in action:

    - fib(5)
    - fib(5) will build a tree with left and right values.
    - fib(5 - 1) + fib(5 - 2)
    - For questions of kilter, the left is executed first, so we'll just have the values of fib(5 - 2) when fib(5 - 1) be returned with something.
    - So, solving the left side:
    -   fib(4) = fib(3) + fib(2)
    -   fib(3) = fib(2) + fib(1)
    -   fib(2)* = 1
    -   fib(1) = 1

    -   fib(3) = 2
    -   fib(4) = 2 + fib(2)
    -   When the code tries to execute again, it'll ask the memo array, if memo[n] already exists, and then as you can see, the function marked with an asterisk is just to remember you of that, so the value is already known without needing to make any calculation.

    - fib(4) = 2 + 1 = 3

    - And then, it'll return to that fib(5) far above, so now we have:
    - fib(5) = 3 + fib(5 - 2)

    - Now, we can solve the right side.
    - fib(3) = fib(2) + fib(1)
    - But, look carefully, these values are already stored in the array, so we don't need to calcute nothing.
    - As n here is 3 in this stage, memo[3] equals to 2.
    - So, without needing any account to solve it, we already have the desired value.
    - fib(5) = 3 + 2 = 5

It was just a simple and small example, but think about it with numbers like 1000, or 10000? It is freeing a lot of time of processment, and it's a good approach for you to take in your recursive functions.

I hope you've understood, if doesn't, please tell me!
    