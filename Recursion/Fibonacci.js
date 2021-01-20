const fibonacci = (times, value = 0, oldValue = 0) => {
    if(times >= 1) {
        let newValue = value === 0 ? value + 1 : value + oldValue;
        let newOldValue = value;
        return fibonacci(times - 1, newValue, newOldValue);
    } else { return value }
}

console.log(fibonacci(4));