const userInput = prompt('Enter your age: ')

// Using Ternary Operator. It is a shorthand way to perform a conditional check and execute different expression based on whether the condition is true or false.
const checkValidity = (input) => input > 18 ? 'Valid' : 'Not Valid';

const result = checkValidity(userInput);
alert(result)