let text = ''
let count = 0
while (count < 10) {

    count ++;
    text += `Number: ${count} <br>`
}

document.getElementById('demo').innerHTML = text
