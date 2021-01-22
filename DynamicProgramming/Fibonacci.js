const memo = new Array();
const fib = (n) => {
    if(memo[n]) return memo[n];
    let result;
    if(n == 1 || n == 2 ) result = 1;
    else { result = fib(n - 1) + fib(n - 2) };
    memo[n] = result;
    return result;
}

console.log(fib(1000));