const input = document.querySelector('input');

input.addEventListener('change', (userInput) => {
    const InputValue = userInput.target.value;
    console.log(InputValue)
});