const summation = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}

summation(1,2,3,4,5,6);
// Output: 21