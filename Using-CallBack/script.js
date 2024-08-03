// Example # 1
// const grades = [87,98,86,78,98]


// let passGrades = grades.every(grade => {
//     return grade >= 90
// })

// console.log(passGrades)

// Return False. Because not every numbers in array is greater than 90

// Example # 2

const grades = [87,98,86,78,98]


let passGrades = grades.every(grade => {
    return grade >= 75
})

console.log(passGrades)

// Output: True. Because all the grades in array is greater equal to 75