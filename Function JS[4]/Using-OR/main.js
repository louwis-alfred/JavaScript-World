let input = prompt('Do you want to continue? [Y/N]')
if (input.toLowerCase() === 'yes' || input.toLowerCase() === 'y') {
    while (true) {
        let age = prompt('What is your age?: ')
        
        age = parseInt(age, 10)
        if (!isNaN(age) && (age < 17 || age >= 60)) {
            alert('You have a free burger');
        } else {
            alert('Enjoy your days!')
        }

        let userContinue = prompt('Do you want to continue? [Y/N]');
        if (userContinue.toLowerCase() === 'yes' || userContinue.toLowerCase() === 'y') {

        } else if (userContinue.toLowerCase() === 'n') {
            break;
        } else {
            alert(`${userContinue} is invalid`)
        }
            
    }
} else if (input.toLowerCase() === 'no' || input.toLowerCase() === 'n') {
    alert('You quit the app');
} else {
    alert('Invalid input. Please refresh and try again.');
}