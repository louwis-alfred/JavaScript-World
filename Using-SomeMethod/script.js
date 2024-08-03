const exams = [98,87,98,96,85,89]

let passGrades = exams.some(exam => {
    return exam === 78
})

// Output: False. Because there's no 78 there