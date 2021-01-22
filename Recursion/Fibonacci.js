/*
    Here, it's kind of like a dynamic programming, but it's not at the same time.
    It wasn't on purpose actually, I was trying do it on my own, the 'FibonacciNewWay' came from a tutorial.
    Ultimately, I found out that my way is better, but it could improve, and it's seen in the Fibonacci file localized in the DynamicProgramming folder.
*/

const fibonacci = (times, value = 0, oldValue = 0) => {
    if(times >= 1) {
        let newValue = value < 1 ? value + 1 : value + oldValue;
        let newOldValue = value;
        return fibonacci(times - 1, newValue, newOldValue);
    } else { return value || 1 }
}

console.log(fibonacci(1000));  