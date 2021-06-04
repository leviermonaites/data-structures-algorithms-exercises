const fib = (num) => (num >= 3 ? fib(num - 1) + fib(num - 2) : 1);

console.log(fib(4));
