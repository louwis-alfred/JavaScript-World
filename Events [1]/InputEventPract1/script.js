const h1 = document.querySelector('h1');
const user_input = document.getElementById('username');

user_input.addEventListener('input', () => {
    h1.innerHTML = `Welcome, ${user_input.value}`;
    if (user_input.value === ""){
        h1.innerHTML = 'Enter Your Username';
    }
});