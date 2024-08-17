for (let i = 1; i <= 100; i ++ ) {
    if (i % 3 == 0 && i % 5 == 0) { // Checks if i is divisible by 3 and 5
        console.log('FizzBuzz') 
    } else if (i % 3 == 0) { // Checks if i is divisible by 3
        console.log('Fizz')
    } else if (i % 5 == 0) { // Checks if i is divisible by 5
        console.log('Buzz')
    }
}

// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ...
