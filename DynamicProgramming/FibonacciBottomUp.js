/*
    This is the best approach, because it doesn't struggle with recursion calls.
*/

const fib_bottom_up = (n) => {
    if(n == 1 || n == 2 ) return 1;
    const bottom_up = new Array(n + 1);
    bottom_up[1] = 1;
    bottom_up[2] = 1;
    for (let i = 3; i <= n; i++) {
        bottom_up[i] = bottom_up[i-1] + bottom_up[i-2];
    }
    return bottom_up[n];
}

console.log(fib_bottom_up(1000));