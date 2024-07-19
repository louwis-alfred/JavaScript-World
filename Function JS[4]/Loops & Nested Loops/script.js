

// let text = ''

// for (let i = 0; i <= 5; i++) {
//     text += `The number is ${i} <br>`;
// }

// document.getElementById('demo').innerHTML = text

let country = "Philippines";
let output = ''
for (let i = 0; i < country.length; i++) {
    output += `Outer Number: ${i} <br>`
    for (let j = 0; j < country.length; j ++) {
        output += `Inner number ${j}, Letter ${country[j]} <br>`
    }
}

document.getElementById('demo').innerHTML = output