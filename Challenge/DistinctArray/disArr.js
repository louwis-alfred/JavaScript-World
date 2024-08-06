const scores = [43453, 5756, 4332, 121234, 6564]

const sortedScores = scores.sort((a, b) => b - a);

const [gold,silver,bronze, ...everyOneElse] = sortedScores

console.log(`Gold: ${gold}`);          
console.log(`Silver: ${silver}`);      
console.log(`Bronze: ${bronze}`);      
                                        
console.log("Thanks to everyone who'd join!")

for (let i = 0; i < everyOneElse.length; i++) {
    console.log(`${i+1}. ${everyOneElse[i]}`)
}

// Output
// Gold: 121234
// Silver: 43453
// Bronze: 6564
// 1. 5756
// 2. 4332
