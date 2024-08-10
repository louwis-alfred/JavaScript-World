const user = {
    email: 'louwisalfred@gmail.github',
    password: 'ilovegithub123',
    firstname: 'louwis',
    lastname: 'alfred'
}



// const firstName = user.firstname;
// Example of Destructuring objects
const { firstname, email } = user


// Destructuring with default value

const { birthYear = 'August 14, 2002' } = user;

console.log(birthYear)