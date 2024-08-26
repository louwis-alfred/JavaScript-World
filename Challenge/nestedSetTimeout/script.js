// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000);
//     }, 1000);
// }, 1000);


// More generic and can reuse
const delayedColor = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext && doNext();
    }, delay);
}

delayedColor('red', 1000, () => {
    delayedColor('orange', 1000, () => {
        delayedColor('yello', 1000, () => {
            delayedColor('green', 1000, () => {
                
            })
        })
    })
})