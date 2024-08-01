let userInput = prompt('Enter name: ')
userInput = userInput.toUpperCase();

const greet = (name) => {
    return `Hello ${name}`;
}

document.getElementById('demo').innerHTML = greet(userInput);