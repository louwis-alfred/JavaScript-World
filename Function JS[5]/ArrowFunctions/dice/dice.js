const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const threeTimes = function(x) {
    for (let i = 0; i < 3; i ++) {
        console.log(`${i + 1}. ${x()}`)
    }

}


