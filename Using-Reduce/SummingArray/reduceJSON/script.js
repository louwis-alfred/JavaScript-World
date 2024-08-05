const movies = [
    {
        title: '3 Idiots',
        score: 100
    },

    {
        title: 'Cars 3',
        score: 86
    },
    {
        title: 'Kung Fu Panda',
        score: 96
    }
]


let highestRate = movies.reduce((mov1, mov2) => {
    if (mov2.score > mov1.score) {
        return mov2
    }
    return mov1.score
})

console.log(highestRate)
// Output: 3 Idiots score 100