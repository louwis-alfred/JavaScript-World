let dog =  {legs: 4, breed: 'aspin'}
console.log(`Original: ${JSON.stringify(dog)}`)
// To add a new property
let newProperty = {...dog, color: 'black'}
console.log(`New: ${JSON.stringify(newProperty)}`)