function displayName() {
    var inputElement = document.querySelector('.name');
    var userName = inputElement.value;
    var greetElement = document.querySelector('.greet');
    greetElement.textContent = 'Hello, ' + userName;
}