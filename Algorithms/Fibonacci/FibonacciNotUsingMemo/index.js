/* 
    A - f(4) = AA f(3) + AB f(2)
    B - f(3) = BA f(2) + BB f(1)
    C - f(2) = 1

    AA = B
    AA = 1 + BB
    BB = 1
    AA = 2

    AB = 1

    A = AA + AB
    A = 3

    And so on...
*/

/*
    This code is smaller than the original file, but it's not better, if you try to execute it with a high number, like 100, you'll see the difference.
    The best way is the dynamic code, stored in the FibonacciMemoize folders.
*/

const fibonacci = (n) => {
  if (n >= 3) return fibonacci(n - 1) + fibonacci(n - 2);
  else return 1;
};

console.log(fibonacci(4));
