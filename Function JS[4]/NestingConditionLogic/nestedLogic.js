const password = prompt('Enter your password: ')

if (password.length >= 7 && password.indexOf(' ') === -1) {
    console.log('Valid!')
} else {
    console.log('Invalid. Please try again!')
}