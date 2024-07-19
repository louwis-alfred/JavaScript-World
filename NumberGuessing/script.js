let guess = Math.floor(Math.random() * 10 + 1);
let userGuess = ''
let text = ''
let attempt = 0
while (true) {
    userGuess = parseInt(prompt('Guess the number: '))
    if (userGuess === guess) {
        text = `Congrats! You have ${attempt} attempts`
        break       
    }
    else {
        alert('Please try again')
        attempt += 1
    }
}

document.getElementById('demo').innerHTML = text