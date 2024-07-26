let grade = 88; 

if (grade > 100 || grade < 1) {
    console.log('Invalid')
}

if (grade >= 98) {
    console.log('Highest Honor')
} else if (grade >= 95) {
    console.log('High Honor')
} else if (grade >= 90) {
    console.log('With Honor')
} else if (grade >= 75) {
    console.log('Passed')
} else {
    console.log('Failed')
}