const changeBodyColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}


changeBodyColor('red', 1000)
.then(() => changeBodyColor('orange', 1000))
.then(() => changeBodyColor('yellow', 1000))
.then(() => changeBodyColor('green', 1000))