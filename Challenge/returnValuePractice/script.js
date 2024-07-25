// function greet() {
//     console.log('Hi')
// }


function greet(person) {
    console.log(`Hello, ${person}`)
}


function game(num1, num2) {
    if (num1 == 1 && num2 == 1){
        console.log('Snake')
    } else {
        console.log('Not Snake')
    }
}

function discount_by_age(age) {
    if ((age > 12 || age < 18) && age >= 60) {
        console.log('Discounted')
    } else {
        console.log('No discount')
    }
}

function multiply(num1, num2) {
    let total = num1 * num2;
    return total
} 