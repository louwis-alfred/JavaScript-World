
const buttons = document.querySelectorAll('button');

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    const newColor = `rgb(${r}, ${g}, ${b})`;

    return newColor;
}

for (let button of buttons) {
    button.addEventListener('click', colorized)
}


const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorized);
}


function colorized() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}
