const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Method 1
function print(n) {
    console.log(n)
}

numbers.forEach(n)

// Method 2
// Using for each
numbers.forEach(function(n){
    console.log(n)
})

// Using for of
for (let n of numbers) {
    console.log(n)
}

// Printing Even
numbers.forEach(function(n) {
    if (n % 2 === 0) {
        console.log(n)
    }
})