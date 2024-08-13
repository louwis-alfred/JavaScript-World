const h1 = document.querySelector('h1');

Clicked = () => {
    h1.classList.toggle('clicked')

    if (h1.classList.contains('clicked')) {
        h1.innerHTML = 'You clicked me!'
    } else {
        h1.innerHTML = 'Click me'
    }
}