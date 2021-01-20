const fibonacci = (times, value = 1, oldValue = 1) => {
    if(times >= 1) {
        let newValue = value + oldValue;
        let oldVal = value;
        return fibonacci(times - 1, newValue, oldVal);
    } else { return value }
}

console.log(fibonacci(4));