const button = document.getElementById('btn');
const container = document.getElementById('container')
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


container.addEventListener('click', () => {
    container.classList.toggle('hide')
})

button.addEventListener('click', (e) => {
    button.style.backgroundColor = makeRandomColor();
    e.stopPropagation();

})