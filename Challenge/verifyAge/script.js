const verifyAge = (age) => {
    return age >= 18 ? 'Adult' : 'Minor';
}


// Example of function call
let userAge = 21;
let result = verifyAge(userAge);

// Printing result 
console.log(`You are ${result}`)