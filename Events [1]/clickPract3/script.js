// addEventListener
// Specify the event type and a callback to run



// Instead of this 
const btn1 = document.querySelector('.btn-example1').onclick = () => {
    alert('This is onClick')
}

// We're going to use this 
const btn2 = document.querySelector('.btn-example2');

btn2.addEventListener('click', () => {
    alert('This is addEventListener')
})


// Declaring a shout function 

const shout = () => {
    return 'Waaaah!!!!'
}

btn3.addEventListener('click', () => {
    alert(shout());
}
