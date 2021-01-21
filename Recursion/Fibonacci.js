const fibonacci = (times, value = 0, oldValue = 0) => {
    if(times >= 1) {
        let newValue = value < 1 ? value + 1 : value + oldValue;
        let newOldValue = value;
        return fibonacci(times - 1, newValue, newOldValue);
    } else { return value || 1 }
}

console.log(fibonacci(4));