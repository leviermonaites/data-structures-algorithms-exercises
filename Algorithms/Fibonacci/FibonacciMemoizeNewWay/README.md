#   HELPER

Hello there!
If you have any doubts about the code, it's a good place for you to get rid of them! So just follow reading the content below.
I think, it'd be better if you read the helper in the FibonacciBottomUp script first.
If you've taken a look, and you already know everything there, let's get start.

Here, we have even a better approach, in terms of processment, and too much better to read and understand.

I'll let an explanation of how the function works.

    - Instead of how we've done earlier, the array is created into the function, why this is so? Think, in the previous function, we created the array, fulfilled it with a lot of numbers, and what about later? The array continued there, just consuming memory! But here, when the function finishes, the array is wiped out.
    
    - When the function is called, it soon gets in front of a if statement, and as a default of fibonnacci sequence, the first two values are equal to 1. And then, if n isn't equals to one, we follow on processing the code.

    - Now, we create a bottom_up, with the exact length that it'll consume since the beginning (another thing that makes this function be better than the other one), so the computer won't struggle with resizing the array in memory everytime.

    - Then, we define the first two values being equal to one.
    
    - And then the magic happens, we have a for loop that store a new value in the index i - that starts already as 3 - being the result of it the sum of the two last values.

One practical example for loop:

    -   bottom_up[3] = bottom_up[2] + bottom_up[1]
    -   bottom_up[3] = 1 + 1
    -   bottom_up[3] = 2

But now, imagine the time it is freeing to the computer do other things?

Hope you've understood, if you didn't, tell me please!
