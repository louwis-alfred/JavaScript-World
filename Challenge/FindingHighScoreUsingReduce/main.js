const movies = [
    {
        title: '3 Idiots',
        score: 100
    },

    {
        title: 'Cars 3',
        score: 100
    },
    {
        title: 'Kung Fu Panda',
        score: 100
    }
]

// Using regular function expression

// const mapMov = movies.map(function(movie) {
//     return `Title: ${movie.title} - ${movie.score}`
// })

// Wrap up for shorter syntax

const movMap = movies.map((movie) => {
     return `Title: ${movie.title} - ${movie.score}`
})