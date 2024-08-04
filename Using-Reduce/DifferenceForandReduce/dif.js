const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

First Method of summing the array
let total = 0;

for (let price of prices) {
    total += price
}

console.log(`$${total}`)
Output: $111.97


// Second method using Reduce 
const total = prices.reduce((total, price) => {
    return total + price
})

console.log(`$${total}`)