const h1 = document.querySelector('h1');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerHTML = newColor;
})


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}