const h1 = document.querySelector('h1');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'olive';
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerHTML = newColor;
})

