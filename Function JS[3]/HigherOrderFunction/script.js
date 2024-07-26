function callTwice(funct) {
    funct()
    funct()
}

// Using Math Floor & Math Random Library
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

// Using For loop
function callTentimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}



callTwice(rollDie);
callTentimes(rollDie);