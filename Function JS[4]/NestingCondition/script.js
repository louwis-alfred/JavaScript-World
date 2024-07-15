let password = null;

while(true) {
    password = prompt('Please enter password: ');

    if (password === null) {
        console.log('Operation canceled.');
        break
    }

    password = password.trim();

    if (password.length >= 6) {
        if(password.indexOf(' ') === -1) {
            console.log(`Your password is ${password}`);
            break
        } else {
            console.log('Password cannot contain spaces!')
        }
    } else {
        console.log('Password too short! Must be 6 or more characters')
    }
}