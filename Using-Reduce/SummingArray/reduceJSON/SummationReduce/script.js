numbers = [1,23,4,5,6,7,8,9,12]

const summation = numbers.reduce((n1,n2) => {
    return n1 + n2
}, 0)

console.log(summation)
// Output: 75