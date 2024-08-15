const h1 = document.querySelector('h1');
const button = document.querySelector('button');

function regenerateMSG() {
    const messages = ['Stay focused and never give up!', 'Believe in yourself!', 'Every day is a second chance.','Push yourself','You can do it!']

    let randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];

}


button.addEventListener('click', () => {
    h1.innerHTML = regenerateMSG();
})