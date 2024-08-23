const form = document.getElementById('form');
const username = document.getElementById('username');
const tweet = document.getElementById('tweet');
const list = document.getElementById('tweets');
let count = 1



form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default behavior of form 
    
    if (!username.value && !tweet.value) return false; // check if inputs are empty

    const newLI = document.createElement('li')
    newLI.textContent = `${count}. ${tweet.value} by ${username.value}`
    count ++;
    list.appendChild(newLI);

    // Reset the value of inputs
    username.value = '';
    tweet.value = '';
})