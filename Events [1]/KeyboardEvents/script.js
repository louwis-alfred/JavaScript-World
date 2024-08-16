const input = document.querySelector('input');

// Key down
input.addEventListener('keydown', (e) => {
    console.log(e.key)
    console.log(e.code)
})

// i.e A social media platform or a text-based application where users need to be aware of the character limit.


// Key up
input.addEventListener('keyup', () => {
    console.log('Logging in')
})

// Perfect example for "keyup" is that, if the user done typing her's input
// the account will automatically login
