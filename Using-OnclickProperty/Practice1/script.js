const btn = document.getElementById('btn')


btn.onclick = function() {
    console.log('You clicked me!')
}

function scream() {
    console.log('AAAAAA')
}

btn.onmouseenter = scream;