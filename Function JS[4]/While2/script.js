const Secret = 'Hippo';

let guess = prompt('Enter the secret animal: ');

while (guess !== Secret) {
    guess = prompt('Again')
}
alert('Congrats! You guessed the Secret!')