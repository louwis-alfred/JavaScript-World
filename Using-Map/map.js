// First Example
const texts = ['rofl','lol','omg','ttyl']
const caps = texts.map(function(c) {
    return c.toUpperCase();
})

console.log(`Original: ${texts}`)
console.log(`Map     : ${caps}`)

// Second Example
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const doubleNum = numbers.map(function(n) {
    return n * 2
})

// Third Example 
const movie = [
    {
        title: 'Titanic',
        score: 90
    },
    
    {
        title: '3 Idiots',
        score: 100
    }
]

const titles = movie.map(function(mov) { // When you use 'map', you call it on the 'movie array'. You give it a function to use for each item in the array.
    return mov.title.toUpperCase();
})
