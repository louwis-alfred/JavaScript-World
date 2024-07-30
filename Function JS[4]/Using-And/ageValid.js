const userAge = prompt('Age: ')
const isRegistered = prompt('Are you registered? [yes/no] ')

if (isRegistered === 'yes' && userAge >= 18) {
    alert('Valid')
} else if (isRegistered === 'no' && userAge >= 18) {
    alert('You need to register first')
} else if (isRegistered === 'yes' && userAge <= 18) {
    alert('Invalid')
} else {
    alert('Non voter')
}