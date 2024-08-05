let userInput = prompt('Enter your age: ')

const convertToInt = parseInt(userInput)

const checkValidity = (convertToInt) => convertToInt > 18 ? 'Valid' : 'Not Valid'

alert(checkValidity())