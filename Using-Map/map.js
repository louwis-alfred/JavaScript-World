// First Example
const texts = ['rofl','lol','omg','ttyl']
const caps = texts.map(function(c) {
    return c.toUpperCase();
})

console.log(`Original: ${texts}`)
console.log(`Map     : ${caps}`)