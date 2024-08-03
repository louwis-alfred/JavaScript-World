const exams = [98,87,98,96,85,89]

let passGrades = exams.every(exam => {
    return exam >= 85
})

// Will output TRUE, because every number in array is >= 85